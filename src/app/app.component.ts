import { Component } from '@angular/core';
import { NewsComponent } from './areas/news/news.component';

@Component({
  selector: 'app-root',
  template: `
    <section class="container mx-auto">
      <app-news />
    </section>
  `,
  styles: [],
  imports: [NewsComponent], // put this in the bundle of code you send to the browser.
})
export class AppComponent {}
