import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostsStore } from '../services/post-store';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <h1>List of Posts</h1>
    @for (post of store.posts(); track post.id) {
      <div>
        <p>Name: {{ post.name }}</p>
        <p>Description: {{ post.description }}</p>
        <p>Posted By: {{ post.postedBy }}</p>
        <p>Posted On: {{ post.datePosted | date: 'medium' }}</p>
        <p>Link: {{ post.link }}</p>
      </div>
    }
  `,
  styles: ``,
})
export class ListComponent {
  store = inject(PostsStore);
}
