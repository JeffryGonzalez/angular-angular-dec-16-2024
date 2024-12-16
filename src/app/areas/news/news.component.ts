import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsHeaderComponent } from './components/news-header.component';
import { NewsListComponent } from './components/news-list.component';

@Component({
  selector: 'app-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsHeaderComponent, NewsListComponent],
  template: ` <app-news-header />
    <app-news-list />`,
  styles: ``,
})
export class NewsComponent {}
