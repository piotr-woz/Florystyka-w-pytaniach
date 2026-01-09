import { Routes } from '@angular/router';
// import { VideoListComponent } from './education/video-list/video-list.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'video',
    loadComponent: () => import('./education/video-frame/video-frame.component')
  }
  // {
  //   path: 'video-list',
  //   component: VideoListComponent,
  // },
];
