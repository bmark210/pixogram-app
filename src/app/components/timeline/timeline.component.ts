import { Component, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../interfaces/posts.interface';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostListComponent, SvgIconComponent],
  providers: [PostsService],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        console.log('data', data);

        this.posts = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
