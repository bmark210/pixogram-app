import { Injectable } from '@angular/core';
import { Section } from '../enums';

@Injectable()
export class NavigationControlService {
  private currentSection: Section = Section.Uploading;
  constructor() {}

  getSelection(): Section {
    return this.currentSection;
  }

  nextStep(section: Section, hasImage: boolean) {
    switch (section) {
      case Section.Uploading:
        if (hasImage) {
          this.currentSection = Section.Redaction;
        }
        break;

      case Section.Redaction:
        if (hasImage) {
          this.currentSection = Section.AddInfo;
        }
        break;

      case Section.AddInfo:
        this.currentSection = Section.AddInfo;
        break;
    }
  }

  prevStep(section: Section, hasImage: boolean) {
    switch (section) {
      case Section.Uploading:
        this.currentSection = Section.Uploading;
        break;
      case Section.Redaction:
        this.currentSection = Section.Uploading;
        break;
      case Section.AddInfo:
          this.currentSection = Section.Redaction;
        break;
    }
  }
}
