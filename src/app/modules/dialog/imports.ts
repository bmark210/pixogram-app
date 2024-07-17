import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [DialogModule, DynamicDialogModule, ButtonModule, InputTextModule, AvatarModule],
  exports: [DialogModule, DynamicDialogModule, ButtonModule, InputTextModule, AvatarModule],
})
export class ImportsModule {}
