import { Injectable } from '@angular/core';
import { DialogService } from '../../dialog/services/dialog.service';
import {
  UnsavedDataDialogComponent,
  UnsavedDataDialogConfig,
} from '../components/unsaved-data-dialog/unsaved-data-dialog.component';
import { DialogRef } from '../../dialog/models';
import {
  ConfirmActionDialogComponent,
  ConfirmActionDialogConfig,
} from '../components/confirm-action-dialog/confirm-action-dialog.component';
import { UnsavedDataDialogResult } from '../../../dashboard/components/modals/interfaces';

@Injectable({ providedIn: 'root' })
export class CommonDialogService {
  constructor(private dialog: DialogService) {}

  warningUnsavedData(
    config: UnsavedDataDialogConfig,
    beforeClose?: (res: UnsavedDataDialogResult) => Promise<unknown>,
  ): DialogRef {
    return this.dialog.open({
      component: UnsavedDataDialogComponent,
      id: 'warning-unsaved-data',
      data: config,
      onClose: beforeClose,
      closeOnClickOutside: false,
      closeOnEsc: false,
      isSingle: true,
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
