import { Injectable } from '@angular/core';
import { DialogService } from '../../dialog/services/dialog.service';
import {
  UnsavedDataDialogComponent,
  UnsavedDataDialogConfig,
  UnsavedDataDialogResult,
} from '../components/unsaved-data-dialog/unsaved-data-dialog.component';
import { DialogRef } from '../../dialog/models';
import {
  ConfirmActionDialogComponent,
  ConfirmActionDialogConfig,
} from '../components/confirm-action-dialog/confirm-action-dialog.component';

@Injectable({ providedIn: 'root' })
export class CommonDialogService {
  constructor(private dialog: DialogService) {}

  warningUnsavedData(
    config: UnsavedDataDialogConfig,
    beforeClose?: (res: UnsavedDataDialogResult) => Promise<unknown>,
  ): DialogRef {
    console.log('config', config);

    return this.dialog.open({
      component: UnsavedDataDialogComponent,
      data: config,
      onClose: beforeClose,
    });
  }

  confirmAction(
    config: ConfirmActionDialogConfig,
    beforeClose?: (res: unknown) => Promise<unknown>,
  ): DialogRef {
    return this.dialog.open({
      component: ConfirmActionDialogComponent,
      data: config,
      onClose: beforeClose,
    });
  }
}
