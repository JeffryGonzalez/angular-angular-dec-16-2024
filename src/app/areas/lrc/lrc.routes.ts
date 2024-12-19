import { Routes } from '@angular/router';
import { LrcComponent } from './lrc.component';
import { PostApi } from './services/post-api';
import { PostsStore } from './services/post-store';
import { DetailsComponent } from './components/details.component';
import { OverviewComponent } from './pages/overview.component';
export const LRC_ROUTES: Routes = [
  {
    path: '',
    providers: [PostApi, PostsStore],
    component: LrcComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
    ],
  },
];
