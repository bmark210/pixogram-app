// imports.module.ts
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  imports: [
    ButtonModule,
    CarouselModule,
    AngularSvgIconModule
  ],
  exports: [
    ButtonModule,
    CarouselModule,
    AngularSvgIconModule
  ]
})
export class ImportsModule {}
