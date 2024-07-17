// imports.module.ts
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DialogContentComponent } from '../../../dialog/components/dialog-content/dialog-content.component';
import { DialogContainerComponent } from '../../../dialog/components/dialog-container/dialog-container.component';
import { DialogHeaderComponent } from '../../../dialog/components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from '../../../dialog/components/dialog-actions/dialog-actions.component';

@NgModule({
  imports: [
    DialogContentComponent,
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogActionsComponent,
    ButtonModule
  ],
  exports: [
    DialogContentComponent,
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogActionsComponent,
    ButtonModule
  ]
})
export class ImportsModule {}
