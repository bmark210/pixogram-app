import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
@Input() postsData: any[] = [];
}
