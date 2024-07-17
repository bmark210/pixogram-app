import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dss-dialog-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-container.component.html',
  styleUrl: './dialog-container.component.scss'
})
export class DialogContainerComponent {
  @Input() styleClass?: string;
}
