import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../../../components/timeline/timeline.component';
import { UserInfoComponent } from '../../../../components/user-info/user-info.component';
import { ButtonModule } from 'primeng/button';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { ConfirmActionDialogComponent } from '../../../UI/dialog-common/components/confirm-action-dialog/confirm-action-dialog.component';
import { DialogContainerComponent } from '../../../UI/dialog/components/dialog-container/dialog-container.component';
import { DialogComponent } from '../../../dialog/dialog.component';
// import { DynamicDialogCommonService } from '../../../UI/dialog-common/services/dynamic-dialog-common.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    UserInfoComponent,
    // DynamicDialogModule,
    // DialogModule,
    ButtonModule
  ],
  providers: [DialogService],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  // constructor(private commonDialogService: DynamicDialogCommonService) { }
  // openConfirmModal(): void {
  //   this.commonDialogService.confirmAction({
  //     text: 'Are you sure?',
  //     isProcess$: of(true),
  //   });
  // }

  openConfirmModal() {
    // this.commonDialogService.show();
  }
}


