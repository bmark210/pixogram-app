import { DialogModule } from '@angular/cdk/dialog';
import { Routes } from '@angular/router';
import { DialogComponent } from './modules/dialog/dialog.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/layouts/dash-layout/dash-layout.component').then(
        (m) => m.DashLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
        import('./modules/dashboard/pages/feed/feed.component').then(
            (m) => m.FeedComponent
          ),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.component').then(
            (m) => m.ExploreComponent
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
  },
  // {
  //   path: 'dinamic',
  //   loadComponent: () =>
  //     import('./modules/dynamic-dialog/dynamic-dialog.component').then(
  //       (m) => m.DynamicDialogComponent
  //     ),
  // },
];
