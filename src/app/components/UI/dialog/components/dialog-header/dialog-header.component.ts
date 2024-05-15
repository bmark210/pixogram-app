import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'dss-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHeaderComponent {
  @Input()
  @HostBinding('class.with-divider')
  divider!: boolean;
}
