import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { NewsArticle } from '../types';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @let article = articleToDisplay();

    <article class="card bg-base-100 shadow-xl mb-4">
      <div class="card-body">
        <h2 [title]="article.datePublished" class="card-title text-primary">
          {{ article.title }}
        </h2>
        <p>{{ article.shortDescription }}</p>
        <p>
          <small>This article was posted {{ relativeDate() }}</small>
        </p>
        <div class="card-actions justify-end">
          <a
            (click)="linkRead.emit(article)"
            class="btn btn-primary"
            [href]="article.link"
            target="_blank"
            >{{ article.linkSlug }}</a
          >
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class NewsItemComponent {
  articleToDisplay = input.required<NewsArticle>();
  headerText = input('Default Header');

  relativeDate = signal('...');
  // @Output() linkRead = new EventEmitter<NewsArticle>()
  linkRead = output<NewsArticle>();

  // effects - these are Signal things that you can use to do cool stuff, but be careful
  constructor() {
    effect(() => {
      // something in the background.
      // effects are "side effects" - not like "special effects"
      const intervalId = setInterval(() => {
        this.relativeDate.set(
          formatDistanceToNow(new Date(this.articleToDisplay().datePublished)) +
            ' Ago',
        );
      }, 1000);
      return () => clearInterval(intervalId); // optional - code to run when the component is taken out of the dom.
    });
  }
}
