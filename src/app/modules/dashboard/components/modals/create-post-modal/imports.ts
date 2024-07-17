// imports.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogHeaderComponent } from '../../../../UI/dialog/components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from '../../../../UI/dialog/components/dialog-actions/dialog-actions.component';
import { DialogContainerComponent } from '../../../../UI/dialog/components/dialog-container/dialog-container.component';
import { DialogContentComponent } from '../../../../UI/dialog/components/dialog-content/dialog-content.component';
import { ButtonModule } from 'primeng/button';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ActionStepsComponent } from './components/action-steps/action-steps.component';
import { UnsavedDataDialogComponent } from '../../../../UI/dialog-common/components/unsaved-data-dialog/unsaved-data-dialog.component';

@NgModule({
  imports: [
    DialogHeaderComponent,
    DialogActionsComponent,
    DialogContainerComponent,
    DialogContentComponent,
    ActionStepsComponent,
    ButtonModule,
    AngularSvgIconModule,
    UnsavedDataDialogComponent
  ],
  exports: [
    DialogHeaderComponent,
    DialogActionsComponent,
    DialogContainerComponent,
    DialogContentComponent,
    ActionStepsComponent,
    ButtonModule,
    AngularSvgIconModule,
    UnsavedDataDialogComponent
  ]
})
export class ImportsModule {}
