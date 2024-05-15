import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DIALOG_DATA_TOKEN, DialogBase, DialogService } from 'modules/ui';

export interface ConfirmActionDialogConfig {
  text: string;
  title?: string;
  yesBtn?: string;
  noBtn?: string;
  yesBtnClass?: string;
  noBtnClass?: string;
  isProcess$: Observable<boolean>;
}

@Component({
  selector: 'dss-confirm-action-dialog',
  templateUrl: './confirm-action-dialog.component.html',
  styleUrls: ['./confirm-action-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmActionDialogComponent implements DialogBase<ConfirmActionDialogConfig, string> {
  text!: string;

  title!: string;

  yesBtn!: string;

  noBtn!: string;

  yesBtnClass!: string;

  noBtnClass!: string;

  isProcess$!: Observable<boolean>;

  constructor(
    private dialog: DialogService,
    @Inject(DIALOG_DATA_TOKEN) config: ConfirmActionDialogConfig,
  ) {
    this.text = config.text;
    this.title = config.title ?? 'Подтвердите действие';
    this.yesBtn = config.yesBtn ?? 'Да';
    this.noBtn = config.noBtn ?? 'Нет';
    this.yesBtnClass = config.yesBtnClass ?? 'p-button-primary'; // p-button-danger
    this.noBtnClass = config.noBtnClass ?? 'p-button-secondary p-button-text';
    this.isProcess$ = config.isProcess$ ?? of(false);
  }

  submit(): void {
    this.dialog.close();
  }

  cancel(): void {
    this.dialog.dismiss();
  }
}
