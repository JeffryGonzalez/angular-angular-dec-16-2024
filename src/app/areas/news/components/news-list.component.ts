import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <section>
      <article>
        <p>It Rained Yesterday!</p>
      </article>
      <article>
        <p>It is going to rain tomorrow</p>
      </article>
      <article>
        <p>The Holidays are coming</p>
      </article>
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {}
