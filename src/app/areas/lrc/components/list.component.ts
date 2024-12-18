import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostsStore } from '../services/post-store';
import { DatePipe } from '@angular/common';
import { RelativeTimeComponent } from '@shared';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RelativeTimeComponent],
  template: `
    <h1>List of Posts</h1>
    @for (post of store.posts(); track post.id) {
      <div class="p-12">
        <p>Name: {{ post.name }}</p>
        <p>Description: {{ post.description }}</p>
        <p>Posted By: {{ post.postedBy }}</p>
        <p>
          Posted On: {{ post.datePosted | date: 'medium' }}
          <app-relative-time [date]="post.datePosted" />
        </p>
        <p>Link: {{ post.link }}</p>
      </div>
    }
  `,
  styles: ``,
})
export class ListComponent {
  store = inject(PostsStore);
}
