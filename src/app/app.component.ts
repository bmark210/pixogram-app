import { Component } from '@angular/core';
import { ImportsModule } from './imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pixogram-app';
}
