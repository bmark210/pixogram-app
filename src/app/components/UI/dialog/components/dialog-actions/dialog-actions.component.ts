import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'dss-dialog-actions',
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogActionsComponent {
  @Input()
  @HostBinding('class.with-divider')
  divider!: boolean;
}
