import { DOCUMENT } from '@angular/common';
import { ComponentRef, Inject, Injectable, Injector } from '@angular/core';
import { DragDrop } from '@angular/cdk/drag-drop';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { isEmpty, noop } from 'lodash';
import { filter } from 'rxjs';
import { DialogBase, DialogConfiguration, DialogInstance, DialogRef } from '../models';
import { DIALOG_DATA_TOKEN } from '../tokens/dialog-data.token';
import { DialogRegistryService } from './dialog-registry.service';
import { DialogViewportRulerService } from './dialog-viewport-ruler.service';

function withModifier(event: KeyboardEvent): boolean {
  return event.altKey || event.ctrlKey || event.metaKey;
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(
    private injector: Injector,
    private overlay: Overlay,
    private dialogRegistry: DialogRegistryService,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  open<T extends DialogBase<unknown, unknown>>(config: DialogConfiguration<T>): DialogRef {
    if (config.isSingle) {
      const singleton = this.dialogRegistry.findByComponent(config.component);
      if (singleton) {
        return this.getDialogRef(singleton);
      }
    }

    const dialogInjector = Injector.create({
      providers: [
        { provide: DIALOG_DATA_TOKEN, useValue: config.data },
        { provide: ViewportRuler, useExisting: DialogViewportRulerService },
        { provide: DragDrop, useClass: DragDrop },
      ],
      parent: this.injector,
    });

    // очищаем фокус, если мы открываем окно со страницы (нет других открытых окон)
    if (!this.dialogRegistry.hasOpenedDialogs()) {
      (this.document.activeElement as HTMLElement)?.blur();
    }
    const dialogGroup = config.group ?? this.dialogRegistry.getDefaultGroup();

    const overlayConfig = new OverlayConfig();
    overlayConfig.panelClass = ['panel-dialog', `dialog-group-${dialogGroup}`];
    overlayConfig.hasBackdrop = !this.dialogRegistry.hasOpenedDialogs(dialogGroup);
    overlayConfig.positionStrategy = this.overlay.position().global();
    overlayConfig.scrollStrategy = this.overlay.scrollStrategies.block();

    const overlayRef = this.overlay.create(overlayConfig);

    const dialogPortal: ComponentPortal<T> = new ComponentPortal<T>(
      config.component,
      null,
      dialogInjector,
    );
    const componentRef: ComponentRef<T> = overlayRef.attach(dialogPortal);
    componentRef.changeDetectorRef.detectChanges();

    if (overlayRef.overlayElement?.parentElement?.style) {
      overlayRef.overlayElement.parentElement.style.justifyContent = 'center';
      overlayRef.overlayElement.parentElement.style.alignItems = 'center';
    }
    const dialogId = config.id || `id-${Date.now()}`;
    if (this.dialogRegistry.findById(dialogId)) {
      throw new RangeError(`dialog with id ${dialogId} already exists`);
    }
    const dialog = {
      overlay: overlayRef,
      resolve: () => noop(),
      reject: () => noop(),
      onClose: config.onClose,
      component: config.component,
      stayAfterNavigate: config.stayAfterNavigate,
      group: dialogGroup,
      id: dialogId,
    } as DialogInstance;

    if (config.closeOnEsc !== false) {
      const sub = overlayRef
        .keydownEvents()
        .pipe(filter((key) => key.keyCode === ESCAPE && !withModifier(key)))
        .subscribe(() => {
          this.dialogRegistry.dismissById(dialog.id);
          sub.unsubscribe();
        });
    }
    if (config.closeOnClickOutside) {
      const clickSub = overlayRef.backdropClick().subscribe(() => {
        this.dialogRegistry.dismissById(dialog.id);
        clickSub.unsubscribe();
      });
    }
    this.dialogRegistry.add(dialog);
    return this.getDialogRef(dialog);
  }

  close(result?: unknown, group?: string): void {
    this.dialogRegistry.closeLast(result, group);
  }

  dismiss(group?: string): void {
    this.dialogRegistry.dismissLast(null, group);
  }

  dismissAll(group?: string): void {
    this.dialogRegistry.dismissAll(group);
  }

  private getDialogRef(item: DialogInstance): DialogRef {
    const instance: DialogInstance = item;
    if (isEmpty(instance.dialogRef)) {
      instance.dialogRef = {
        id: item.id,
        group: item.group,
        closed: new Promise((result) => {
          instance.resolve = result;
        }),
        dismissed: new Promise((result) => {
          instance.reject = result;
        }),
      };
    }
    return instance.dialogRef as DialogRef;
  }
}
