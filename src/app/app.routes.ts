import { Routes } from '@angular/router';

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
    path: 'video-list',
    loadComponent: () => import('./education/video-list/video-list.component')
  },
  {
    path: 'video-list/video',
    loadComponent: () => import('./education/video-frame/video-frame.component')
  }
];
