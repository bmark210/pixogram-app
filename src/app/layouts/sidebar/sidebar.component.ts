import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeIconComponent } from '../../components/common/icons/home-icon/home-icon.component';
import { CreateComponent } from '../../components/common/icons/create/create.component';
import { ExploreIconComponent } from '../../components/common/icons/explore-icon/explore-icon.component';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeIconComponent, CreateComponent, ExploreIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  currentSection: string = "create";
  changeSection(section: string) {
    this.currentSection = section;
  }
}
