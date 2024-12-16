import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { NewsArticle } from '../types';
import { NewsItemComponent } from './news-item.component';

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
      @for (article of articles(); track article.id) {
        <!-- display the app-news-item -->
        <app-news-item
          (linkRead)="readTheArticle($event)"
          [articleToDisplay]="article"
          [headerText]="preferredHeader()"
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
  articles = signal<NewsArticle[]>([
    // none of that change detection stuff I just talked has anything to do with signals.
    {
      id: '1',
      title: 'Angular Inputs and Outputs',
      shortDescription:
        'Read about Angular inputs and outputs in "modern" Angular',
      link: 'https://applied-angular.hypertheory.com/guides/components.html',
      datePublished: '2024-12-16T17:32:12.556Z',
      linkSlug: 'Read about Angular Inputs and Outputs',
    },
    {
      id: '2',
      title: 'Creating an Angular Application',
      shortDescription: 'Learn how to create a super rad Angular app!',
      link: 'https://applied-angular.hypertheory.com/guides/angular-setup.html',
      datePublished: '2024-12-05T13:18:12.556Z',
      linkSlug: 'Read about Creating an App',
    },
    {
      id: '3',
      title: 'Deborah Kurata YouTube',
      shortDescription:
        'Youtube Videos about Angular Signals and stuff from Deborah Kurata',
      link: 'https://www.youtube.com/@deborah_kurata/videos',
      datePublished: '2024-12-16T21:20:17.014Z',
      linkSlug: 'Deborah Kurata Videos',
    },
  ]);

  readArticles = signal<NewsArticle[]>([]);
  readArticleCount = computed(() => this.readArticles().length);
  readTheArticle(article: NewsArticle) {
    this.readArticles.update((a) => [article, ...a]);
  }
}
