import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'dss-dialog-header',
  standalone: true,
  imports: [],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss'
})
export class DialogHeaderComponent {
  @Input()
  @HostBinding('class.with-divider')
  divider!: boolean;
}
