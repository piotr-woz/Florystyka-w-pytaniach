import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoFrameComponent } from './education/video-frame/video-frame.component';
// import { VideoListComponent } from './education/video-list/video-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'video',
    component: VideoFrameComponent,
  },
  // {
  //   path: 'video-list',
  //   component: VideoListComponent,
  // },
];
