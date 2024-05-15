// import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { DialogBase, DialogService, DIALOG_DATA_TOKEN } from '../../../index';

// export interface UnsavedDataDialogConfig {
//   isProcess: Observable<boolean>;
//   message: string;
// }

// export interface UnsavedDataDialogResult {
//   decision: 'skip' | 'save';
// }

// @Component({
//   selector: 'dss-unsaved-data-dialog',
//   templateUrl: './unsaved-data-dialog.component.html',
//   styleUrls: ['./unsaved-data-dialog.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class UnsavedDataDialogComponent
//   implements DialogBase<UnsavedDataDialogConfig, UnsavedDataDialogResult>
// {
//   readonly message!: string;

//   readonly isProcess$!: Observable<boolean>;

//   constructor(
//     private dialog: DialogService,
//     @Inject(DIALOG_DATA_TOKEN) config: UnsavedDataDialogConfig,
//   ) {
//     this.isProcess$ = config.isProcess ?? of(false);
//     this.message = config.message ?? '';
//   }

//   cancel(): void {
//     this.dialog.dismiss();
//   }

//   submit(decision: 'skip' | 'save'): void {
//     this.dialog.close({ decision });
//   }
// }
