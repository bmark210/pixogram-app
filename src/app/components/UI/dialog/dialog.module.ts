import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { DialogContainerComponent } from './components/dialog-container/dialog-container.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from './components/dialog-actions/dialog-actions.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogActionsComponent,
  ],
  imports: [CommonModule, OverlayModule, ScrollingModule, A11yModule],
  exports: [
    DialogContainerComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogActionsComponent,
  ],
})
export class DialogModule {}
