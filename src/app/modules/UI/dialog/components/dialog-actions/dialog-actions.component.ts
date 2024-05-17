import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-actions',
  standalone: true,
  imports: [],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogActionsComponent {
  @Input()
  @HostBinding('class.with-divider')
  divider!: boolean;
}
