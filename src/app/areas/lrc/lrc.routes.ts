import { Routes } from '@angular/router';
import { LrcComponent } from './lrc.component';
import { PostApi } from './services/post-api';
export const LRC_ROUTES: Routes = [
  {
    path: '',
    providers: [PostApi],
    component: LrcComponent,
    children: [],
  },
];
