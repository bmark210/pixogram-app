// imports.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DynamicDialogComponent } from './modules/dynamic-dialog/dynamic-dialog.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FilePreviewOverlayComponent } from './modules/UI/cdk-dialog/components/file-preview-overlay/file-preview-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    AvatarModule,
    DynamicDialogComponent,
    FilePreviewOverlayComponent,
    OverlayModule
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    AvatarModule,
    DynamicDialogComponent,
    FilePreviewOverlayComponent,
    OverlayModule
  ]
})
export class ImportsModule {}
