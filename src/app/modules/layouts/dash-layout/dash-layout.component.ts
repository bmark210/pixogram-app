import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-layout',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterOutlet],
  templateUrl: './dash-layout.component.html',
})
export class DashLayoutComponent {

}
