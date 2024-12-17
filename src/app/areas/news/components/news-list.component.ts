import {
  ChangeDetectionStrategy,
  Component,
  computed,
  resource,
  signal,
} from '@angular/core';
import { NewsArticle } from '../types';
import { NewsItemComponent } from './news-item/news-item.component';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemComponent],
  template: `
    @if (readArticleCount() !== 0) {
      <div>
        <p>You have read {{ readArticleCount() }} articles!</p>
      </div>
    } @else {
      <p>You are really behind on your reading! Read some stuff.</p>
    }
    <section>
      @for (article of articles.value(); track article.id) {
        <!-- display the app-news-item -->
        <app-news-item
          (linkRead)="readTheArticle($event)"
          [articleToDisplay]="article"
        />
      } @empty {
        <p>No news! Check Back Later!</p>
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  // data in a component is a Signal, or .................................. an observable
  preferredHeader = signal('This is a header from a signal');

  articles = resource<NewsArticle[], unknown>({
    loader: () =>
      fetch('http://fake-news.some-fake-server.com/news-feed').then((r) =>
        r.json(),
      ),
  });
  readArticles = signal<NewsArticle[]>([]);
  readArticleCount = computed(() => this.readArticles().length);
  readTheArticle(article: NewsArticle) {
    this.readArticles.update((a) => [article, ...a]);
  }
}
