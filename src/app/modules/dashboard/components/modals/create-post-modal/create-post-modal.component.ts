import { CommonDialogService } from './../../../../UI/dialog-common/services/common-dialog.service';
import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { MediaActionsService } from './services/media-actions.service';
import { NavigationControlService } from './services/navigation-control.service';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Section } from './enums';
import { UnsavedDataDialogResult } from '../interfaces';

@Component({
  selector: 'app-create-post-modal',
  standalone: true,
  imports: [ImportsModule],
  providers: [
    SvgIconRegistryService,
    MediaActionsService,
    NavigationControlService,
  ],
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss'],
})
export class CreatePostModalComponent {
  currentSection: BehaviorSubject<Section> = new BehaviorSubject<Section>(Section.Uploading);
  clearTrigger$: Subject<boolean> = new Subject<boolean>();

  public selectionEnum = Section;

  constructor(
    private navControl: NavigationControlService,
    private commonDialog: CommonDialogService,
    private mediaAcions: MediaActionsService
  ) {}

  nextStep() {
    this.navControl.nextStep(
      this.currentSection.value,
      !!this.mediaAcions.getPhotos().length
    );
    this.currentSection.next(this.navControl.getSelection());
  }

  prevStep() {
    if (this.currentSection.value === Section.Redaction) {
      this.warningUnsavedDataModal();
    } else {
      this.navControl.prevStep(
        this.currentSection.value,
        !!this.mediaAcions.getPhotos().length
      );
      this.currentSection.next(this.navControl.getSelection());
    }
  }

  dismissCreating(answer: string) {
    this.clearTrigger$.next(answer === 'no');
    this.navControl.prevStep(
      this.currentSection.value,
      !!this.mediaAcions.getPhotos().length
    );
    this.currentSection.next(this.navControl.getSelection());
  }

  warningUnsavedDataModal() {
    this.commonDialog.warningUnsavedData(
      {
        isProcess: of(true),
        message: "If you leave, your edits won't be saved.",
        title: 'Discard post?',
      },
      async (res: UnsavedDataDialogResult) => {
        if (res?.decision === 'save') {
          return;
        } else {
          this.dismissCreating('no');
        }
      }
    );
  }
}
