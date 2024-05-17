import { OverlayRef, ComponentType } from '@angular/cdk/overlay';
import { DialogRef } from './dialog-ref';

export interface DialogInstance {
  component?: ComponentType<unknown>;
  overlay: OverlayRef;
  resolve: (result?: unknown) => void;
  reject: (error?: unknown) => void;
  dialogRef?: DialogRef;
  stayAfterNavigate?: boolean;
  onClosePromise?: Promise<unknown> | null;
  onClose?: (result?: unknown) => Promise<unknown>;
  group: string;
  id: string;
}
