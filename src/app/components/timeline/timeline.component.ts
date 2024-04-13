import { Component } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  posts: any[] = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet', image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/wml2sqgr72dsndwigtmu.jpg' },
    { title: 'Post 2', content: 'Consectetur adipiscing elit' },
    { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt' },
    { title: 'Post 4', content: 'Ut labore et dolore magna aliqua' },
    { title: 'Post 5', content: 'Ut enim ad minim veniam' },
    { title: 'Post 6', content: 'Quis nostrud exercitation ullamco' },
    {
      title: 'Post 7',
      content: 'Laboris nisi ut aliquip ex ea commodo consequat',
    },
    { title: 'Post 8', content: 'Duis aute irure dolor in reprehenderit' },
    { title: 'Post 9', content: 'Voluptate velit esse cillum dolore' },
    { title: 'Post 10', content: 'Eu fugiat nulla pariatur' },
  ];
}
