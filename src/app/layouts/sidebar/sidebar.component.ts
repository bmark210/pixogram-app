import { MediaActionsService } from './../../modules/dashboard/components/modals/create-post-modal/services/media-actions.service';
// sidebar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeIconComponent } from '../../components/common/icons/home-icon/home-icon.component';
import { CreateComponent } from '../../components/common/icons/create/create.component';
import { ExploreIconComponent } from '../../components/common/icons/explore-icon/explore-icon.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CommonDialogService } from '../../modules/UI/dialog-common/services/common-dialog.service';
import { BehaviorSubject, of } from 'rxjs';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { DialogService } from '../../modules/UI/dialog/services/dialog.service';
import { CreatePostModalComponent } from '../../modules/dashboard/components/modals/create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    DynamicDialogModule,
    CommonModule,
    RouterModule,
    HomeIconComponent,
    CreateComponent,
    ExploreIconComponent
  ],
  providers: [SvgIconRegistryService, MediaActionsService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentSection: string = 'create';

  constructor(private commonDialog: CommonDialogService, private dialog: DialogService) {}

  openCreateModal() {
    this.dialog.open({
      id: 'create-modal',
      group: 'create',
      component: CreatePostModalComponent,
      closeOnEsc: true,
      closeOnClickOutside: true,
    });
  }

  warningUnsavedDataModal() {
    let confirm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    this.commonDialog.warningUnsavedData(
      {
        isProcess: confirm,
        message: "If you leave, your edits won't be saved.",
        title: 'Discard post?',
      },
      // async (res) => {
      //   alert(res);
      //   if (res.decision === 'save') {
      //     // alert('yes');
      //     return;
      //   } else {
      //     alert('no');
      //     this.dismissCreating('no');
      //   }
      // }
    );
  }
  show() {
    alert(window.screen.availWidth);
  }


  openConfirmModal() {
    this.commonDialog.confirmAction({
      isProcess$: of(true),
      text: 'Are you sure?',
    });
  }
}
