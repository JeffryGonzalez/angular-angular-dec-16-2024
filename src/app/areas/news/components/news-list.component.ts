import { DatePipe, NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

type NewArticle = {
  id: string;
  title: string;
  shortDescription: string;
  link: string;
  datePublished: string;
};

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <section>
      @for (article of articles(); track article.id) {
        <article class="card bg-base-100  shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ article.title }}</h2>
            <p>{{ article.shortDescription }}</p>
            <p>
              <small
                >{{ article.datePublished | date: 'medium' }}This article was
                posted 2 days ago.</small
              >
            </p>
            <div class="card-actions justify-end">
              <a class="btn btn-primary" href="">Read All About Angular 19</a>
            </div>
          </div>
        </article>
      } @empty {
        <p>No news! Check Back Later!</p>
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  // data in a component is a Signal, or .................................. an observable

  articles = signal<NewArticle[]>([
    {
      id: '1',
      title: 'Lunch time',
      shortDescription: 'Time for Lunch',
      link: 'https://blahblahblbhal',
      datePublished: '2024-12-16T17:32:12.556Z',
    },
  ]);
}
