import { Routes } from '@angular/router';
import { LrcComponent } from './lrc.component';
import { PostApi } from './services/post-api';
import { PostsStore } from './services/post-store';
export const LRC_ROUTES: Routes = [
  {
    path: '',
    providers: [PostApi, PostsStore],
    component: LrcComponent,
    children: [],
  },
];
