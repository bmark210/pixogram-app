import { ComponentType } from '@angular/cdk/portal';

export interface DialogConfiguration<TDialogType> {
  component: ComponentType<TDialogType>;
  id?: string;
  group?: string;
  data?: unknown;
  onClose?: (res: any) => Promise<unknown>; // todo fix by UnsavedDataDialogResult and other types
  closeOnClickOutside?: boolean;
  isSingle?: boolean;
  closeOnEsc?: boolean;
  stayAfterNavigate?: boolean;
}
