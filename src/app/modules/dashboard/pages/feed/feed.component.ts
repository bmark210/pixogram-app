import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../../../components/timeline/timeline.component';
import { UserInfoComponent } from '../../../../components/user-info/user-info.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    UserInfoComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}


