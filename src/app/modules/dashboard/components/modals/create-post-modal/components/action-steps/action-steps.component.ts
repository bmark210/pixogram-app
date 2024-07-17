import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { MediaActionsService } from '../../services/media-actions.service';
import { Section } from '../../enums';
import { NavigationControlService } from '../../services/navigation-control.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-action-steps',
  standalone: true,
  imports: [ImportsModule],
  providers: [NavigationControlService],
  templateUrl: './action-steps.component.html',
  styleUrl: './action-steps.component.scss',
})
@UntilDestroy()
export class ActionStepsComponent implements OnInit {
  @ViewChild('input') fileInput!: ElementRef;

  @Input() currentSection: BehaviorSubject<number> = new BehaviorSubject<Section>(Section.Uploading);
  @Input() clearTrigger$: Observable<boolean> = new Observable<boolean>();

  private photos: File[] = [];

  actionWith: string = '';
  public SelectionEnum = Section;
  public viewPhotos: any[] = [];
  constructor(
    private mediaAcions: MediaActionsService,
    private navControl: NavigationControlService
  ) {}

  ngOnInit(): void {
    this.trackToClearMedia();
  }

  ngAfterViewInit() {
    this.initWith();
  }

  getSelection(): Section {
    return this.currentSection.value;
  }

  handleUploadFiles(event: Event) {
    this.fileInput.nativeElement.click();
    const input = event.target as HTMLInputElement;
    const files = input.files as FileList;
    this.filesAction(files);
  }

  dragUplodFiles(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files as FileList;
    this.filesAction(files);
  }

  filesAction(files: FileList) {
    this.mediaAcions.uploadPhotos(files);
    this.photos = this.mediaAcions.getPhotos();
    this.viewPhotos = this.mediaAcions.getPhotosView();

    // change section to redaction
    if (this.photos?.length > 0) {
      this.navControl.nextStep(this.currentSection.value, true);
      this.currentSection.next(this.navControl.getSelection());
    }
  }

  trackToClearMedia() {
    this.clearTrigger$.pipe(untilDestroyed(this)).subscribe((x) => {
      if (x) {
        this.mediaAcions.clearMedia();
        this.photos = [];
        this.viewPhotos = [];
      }
    });
  }

  initWith() {
    if(window.innerWidth < 768){
      this.actionWith = '100%';
    } else if (window.innerWidth < 1024) {
      this.actionWith = '50%';
    } else if (window.innerWidth < 1280) {
      this.actionWith = '25%';
    }
  }
}
