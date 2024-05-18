import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../../../components/timeline/timeline.component';
import { UserInfoComponent } from '../../../../components/user-info/user-info.component';
import { ButtonModule } from 'primeng/button';
import { DialogRegistryService } from '../../../UI/dialog/services/dialog-registry.service';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { DialogService } from '../../../UI/dialog/services/dialog.service';
import { MyCustomModalComponent } from '../../../UI/dialog-common/components/my-custom-modal/my-custom-modal.component';

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
  constructor(private dialog: DialogService, private registerDialog: DialogRegistryService, private overlay: Overlay) { }
  onClick() {
    this.dialog.open({component: MyCustomModalComponent});
  }
}


