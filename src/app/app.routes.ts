import { Routes } from '@angular/router';
import { NewsComponent } from './areas/news/news.component';

// Modes within our application.
export const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
];
