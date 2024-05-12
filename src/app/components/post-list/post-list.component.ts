import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/posts.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() postsData: IPost[] = [];
}
