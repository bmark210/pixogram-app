import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ImportsModule } from "./imports";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ImportsModule],
  providers: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }
}
