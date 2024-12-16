import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NewsArticle } from '../types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <p>{{ headerText() }}</p>
    @let article = articleToDisplay();
    <article class="card bg-base-100 shadow-xl mb-4">
      <div class="card-body">
        <h2 class="card-title text-primary">{{ article.title }}</h2>
        <p>{{ article.shortDescription }}</p>
        <p>
          <small
            >{{ article.datePublished | date: 'medium' }}This article was posted
            2 days ago.</small
          >
        </p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" [href]="article.link" target="_blank">{{
            article.linkSlug
          }}</a>
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class NewsItemComponent {
  articleToDisplay = input.required<NewsArticle>();
  headerText = input('Default Header');
}
