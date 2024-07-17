import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogBase } from '../../../dialog/models';
import { DialogService } from '../../../dialog/services/dialog.service';
import { DIALOG_DATA_TOKEN } from '../../../dialog/tokens/dialog-data.token';
import { ImportsModule } from './imports';
import { UnsavedDataDialogResult } from '../../../../dashboard/components/modals/interfaces';

export interface UnsavedDataDialogConfig {
  isProcess: Observable<boolean>;
  message: string;
  title?: string;
}

@Component({
  selector: 'app-unsaved-data-dialog',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './unsaved-data-dialog.component.html',
  styleUrl: './unsaved-data-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsavedDataDialogComponent
  implements DialogBase<UnsavedDataDialogConfig, UnsavedDataDialogResult>
{
  readonly message!: string;

  readonly isProcess$!: Observable<boolean>;

  readonly title: string;

  constructor(
    private dialog: DialogService,
    @Inject(DIALOG_DATA_TOKEN) config: UnsavedDataDialogConfig
  ) {
    this.isProcess$ = config.isProcess ?? of(false);
    this.message = config.message ?? '';
    this.title = config.title ?? 'Внимание!';
  }

  submit(decision: 'skip' | 'save'): void {
    this.dialog.close({decision});
  }
}
