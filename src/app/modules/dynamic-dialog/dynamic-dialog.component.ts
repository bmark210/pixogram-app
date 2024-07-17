import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dynamic-dialog',
  standalone: true,
  imports: [],
  providers: [DialogService],
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialogComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  show() {
    this.ref = this.dialogService.open(DialogComponent, {
        // header: 'Select a Product',
        // width: '50vw',
        // modal:true,
        // breakpoints: {
        //     '960px': '75vw',
        //     '640px': '90vw'
        // },
    });
  }
}
