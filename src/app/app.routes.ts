import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { ExploreComponent } from './pages/explore/explore.component';

export const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'explore', component: ExploreComponent },
];
