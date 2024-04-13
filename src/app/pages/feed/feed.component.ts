import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    UserInfoComponent
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

}
