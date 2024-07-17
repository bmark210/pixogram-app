import { Injectable } from '@angular/core';

@Injectable()
export class MediaActionsService {

  private photos: File[] = [];
  private viewPhotos: string[] = [];

  constructor() {}

  getPhotos(): File[] {
    return this.photos;
  }

  getPhotosView(): string[] {
    return this.viewPhotos;
  }

  clearMedia() {
    this.photos = [];
    this.viewPhotos = [];
  }

  uploadPhotos(files: FileList) {
    const photos: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i] as File;

      if (file instanceof File && file.type.includes('image')) {
        photos.push(file);
      } else {
        alert('Only images are allowed');
        break;
      }
    }

    this.photos = [...this.photos, ...photos];
    this.fillViewPhotos();
  }

  fillViewPhotos() {
    for (let i = 0; i < this.photos.length; i++) {
      const file = this.photos[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.viewPhotos.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
