import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../../../components/timeline/timeline.component';
import { UserInfoComponent } from '../../../../components/user-info/user-info.component';
import { ButtonModule } from 'primeng/button';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { CommonDialogService } from '../../../UI/dialog-common/services/common-dialog.service';
import { of } from 'rxjs';
import { DialogService } from '../../../UI/dialog/services/dialog.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    UserInfoComponent,
    ButtonModule,
    OverlayModule
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  constructor(private commonDialogService: CommonDialogService, private dialog: DialogService) { }
  openModal() {
    this.commonDialogService.confirmAction({text: 'Are you sure?', isProcess$: of(true)});
  }

  closeModal() {
    this.dialog.close();
  }
}


