import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DialogContentComponent } from '../../../dialog/components/dialog-content/dialog-content.component';
import { DialogContainerComponent } from '../../../dialog/components/dialog-container/dialog-container.component';
import { DialogHeaderComponent } from '../../../dialog/components/dialog-header/dialog-header.component';
import { DialogService } from '../../../dialog/services/dialog.service';
import { DIALOG_DATA_TOKEN } from '../../../dialog/tokens/dialog-data.token';
import { Observable, of } from 'rxjs';
import { DialogActionsComponent } from '../../../dialog/components/dialog-actions/dialog-actions.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgIf } from '@angular/common';

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
  selector: 'app-confirm-action-dialog',
  standalone: true,
  imports: [
    DialogContentComponent,
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogActionsComponent,
    ButtonModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './confirm-action-dialog.component.html',
  styleUrl: './confirm-action-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmActionDialogComponent {
  text!: string;

  title!: string;

  yesBtn!: string;

  noBtn!: string;

  yesBtnClass!: string;

  noBtnClass!: string;

  isProcess$!: Observable<boolean>;

  constructor(
    private dialog: DialogService,
    @Inject(DIALOG_DATA_TOKEN) config: ConfirmActionDialogConfig
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
