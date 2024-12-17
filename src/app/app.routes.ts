import { Routes } from '@angular/router';
import { NewsComponent } from './areas/news/news.component';
import { ReadArticleStore } from './areas/news/services/read-articles.store';
import { NewsListComponent } from './areas/news/components/news-list.component';
import { HistoryComponent } from './areas/news/components/history.component';

// Modes within our application.
export const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./areas/counter-lab/counter.routes').then(
        (r) => r.COUNTER_ROUTES,
      ),
  },
  {
    path: 'golf',
    loadChildren: () =>
      import('./areas/golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  {
    path: 'news',
    providers: [ReadArticleStore],
    component: NewsComponent,
    children: [
      {
        path: 'list', // /news/list
        component: NewsListComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
];
