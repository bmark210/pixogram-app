import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
// import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  providers: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {}
