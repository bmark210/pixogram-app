import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { SvgIconComponent } from 'angular-svg-icon';
import { AsyncPipe } from '@angular/common';
import { DialogContentComponent } from '../../../dialog/components/dialog-content/dialog-content.component';
import { DialogContainerComponent } from '../../../dialog/components/dialog-container/dialog-container.component';
import { DialogHeaderComponent } from '../../../dialog/components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from '../../../dialog/components/dialog-actions/dialog-actions.component';
import { DialogBase } from '../../../dialog/models';
import { DialogService } from '../../../dialog/services/dialog.service';
import { DIALOG_DATA_TOKEN } from '../../../dialog/tokens/dialog-data.token';

export interface UnsavedDataDialogConfig {
  isProcess: Observable<boolean>;
  message: string;
}

export interface UnsavedDataDialogResult {
  decision: 'skip' | 'save';
}

@Component({
  selector: 'app-unsaved-data-dialog',
  standalone: true,
  imports: [
    DialogContentComponent,
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogActionsComponent,
    ButtonModule,
    AsyncPipe,
  ],
  templateUrl: './unsaved-data-dialog.component.html',
  styleUrl: './unsaved-data-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsavedDataDialogComponent
  implements DialogBase<UnsavedDataDialogConfig, UnsavedDataDialogResult>
{
  readonly message!: string;

  readonly isProcess$!: Observable<boolean>;

  constructor(
    private dialog: DialogService,
    @Inject(DIALOG_DATA_TOKEN) config: UnsavedDataDialogConfig
  ) {
    this.isProcess$ = config.isProcess ?? of(false);
    this.message = config.message ?? '';
  }

  cancel(): void {
    this.dialog.dismiss();
  }

  submit(decision: 'skip' | 'save'): void {
    this.dialog.close({ decision });
  }
}
