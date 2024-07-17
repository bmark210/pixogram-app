import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dss-dialog-content',
  standalone: true,
  imports: [],
  templateUrl: './dialog-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {

}
