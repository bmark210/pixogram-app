import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {

}
