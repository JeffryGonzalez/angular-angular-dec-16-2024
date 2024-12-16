import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h2>The News That's Fit To Print</h2>
      <p>Some Changes</p>
    </div>
  `,
  styles: ``,
})
export class NewsHeaderComponent {}
