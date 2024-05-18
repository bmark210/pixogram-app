import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty, isFunction } from 'lodash';
import { filter } from 'rxjs';
import { DialogInstance } from '../models/dialog-instance';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class DialogRegistryService {
  private readonly dialogs: DialogInstance[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        untilDestroyed(this),
      )
      .subscribe(() =>
        this.dialogs
          .filter((dialog) => !dialog.stayAfterNavigate)
          .forEach((dlg) => this.dismiss(dlg)),
      );
  }


   /**
   * @name showDialogs
   * @description показ списка зарегестрированных диалогов
   */
  showDialogs(): void {
    console.log('showDialogs', this.dialogs);

  }

  /**
   * @name add
   * @description регистрация диалога
   * @param dialog
   */
  add(dialog: DialogInstance): void {
    this.dialogs.push(dialog);
  }

  /**
   * @name findByComponent
   * @description поиск диалога с типом компонента
   * @param component
   */
  findByComponent<T>(component: ComponentType<T>): DialogInstance | undefined {
    return this.dialogs.find((dlg) => dlg.component === component);
  }

  /**
   * @name findById
   * @description поиск открытого диалога по id
   * @param id
   */
  findById(id: string): DialogInstance | undefined {
    return this.dialogs.find((dlg) => dlg.id === id);
  }

  /**
   * @name getDialogs
   * @description получение массива открытых диалогов
   * @param {string} [group] - имя группы диалогов
   */
  private getDialogs(group?: string): DialogInstance[] {
    return isEmpty(group) ? [...this.dialogs] : this.dialogs.filter((dlg) => dlg.group === group);
  }

  /**
   * @name getDefaultGroup
   * @description формирование имени группы для диалога
   */
  getDefaultGroup(): string {
    return this.dialogs.length === 0 ? 'root' : this.dialogs[this.dialogs.length - 1].group;
  }

  /**
   * @name dismissById
   * @param {string} dialogId идентификатор диалогового окна
   * @param {unknown} [error]
   */
  dismissById(dialogId: string, error?: unknown): void {
    const dialog = this.findById(dialogId);
    if (dialog) {
      this.dismiss(dialog, error);
    }
  }

  /**
   * @name dismissLast
   * @description закрытие последнего диалога путем отмены
   * @param {unknown} [error]
   * @param {string} [group] имя группы диалогов
   */
  dismissLast(error?: unknown, group?: string): void {
    const dialog = this.findLastDialog(group);
    if (dialog) {
      this.dismiss(dialog, error);
    }
  }

  /**
   * @name dismissAll
   * @description закрытие всех диалоговых окон путем отмены
   * @param {string} [group] имя группы диалогов
   */
  dismissAll(group?: string): void {
    this.getDialogs(group).forEach((dlg) => this.dismiss(dlg, 'DismissQuiet'));
  }

  /**
   * @name closeLast
   * @description закрытие последний диалог с обработкой результата
   * @param {unknown} result
   * @param {string} [group]
   */
  closeLast(result?: unknown, group?: string): void {
    const dialog = this.findLastDialog(group);
    if (dialog) {
      this.close(dialog, result);
    }
  }

  /**
   * @name hasOpenedDialogs
   * @description получение признака наличия открытых диалоговых окон
   * @param {string} [group] имя группы диалогов
   * @returns {boolean}
   */
  hasOpenedDialogs(group?: string): boolean {
    if (group) {
      return this.dialogs.findIndex((dlg) => dlg.group === group) > -1;
    }
    return this.dialogs.length > 0;
  }

  /**
   * @name dismiss
   * @description закрыть диалог без обработки путем отмены
   * @param dialog
   * @param {unknown} [error]
   * @private
   */
  private dismiss(dialog: DialogInstance, error?: unknown): void {
    dialog.overlay.dispose();
    dialog.reject(error);
    this.remove(dialog);
  }

  /**
   * @name close
   * @description закрыть диалог с проверкой результата
   * @param {DialogInstance} dialog
   * @param {unknown} [result]
   * @private
   */
  private close(dialog: DialogInstance, result?: unknown): void {
    if (isEmpty(dialog.onClosePromise)) {
      dialog.onClosePromise = isFunction(dialog.onClose)
        ? dialog.onClose(result)
        : Promise.resolve();

      dialog.onClosePromise
        .then(() => {
          dialog.overlay.dispose();
          dialog.resolve(result);
          dialog.onClosePromise = null;
          this.remove(dialog);
        })
        .catch((reason) => {
          dialog.onClosePromise = null;
          if (reason !== 'CloseCode') {
            return Promise.reject(reason);
          }
          return null;
        });
    }
  }

  /**
   * @name findLastDialog
   * @description поиск последнего открытого диалога
   * @param {string} [group] имя группы диалогов
   * @private
   * @returns {(DialogInstance | undefined)}
   */
  private findLastDialog(group?: string): DialogInstance | undefined {
    const dialogGroup = isEmpty(group)
      ? this.dialogs
      : this.dialogs.filter((dlg) => dlg.group === group);
    return isEmpty(dialogGroup) ? undefined : dialogGroup[dialogGroup.length - 1];
  }

  /**
   * @name remove
   * @description удаление диалога из массива открытых диалоговых окон
   * @param {DialogInstance} dialog
   * @private
   */
  private remove(dialog: DialogInstance): void {
    const indexDlg = this.dialogs.findIndex((dlg) => dlg.id === dialog.id);
    if (indexDlg > -1) {
      this.dialogs.splice(indexDlg, 1);
    }
  }
}
