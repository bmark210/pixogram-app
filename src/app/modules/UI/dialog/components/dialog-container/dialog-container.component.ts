import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-container.component.html',
  styleUrl: './dialog-container.component.scss'
})
export class DialogContainerComponent {
  @Input() styleClass?: string;
}
