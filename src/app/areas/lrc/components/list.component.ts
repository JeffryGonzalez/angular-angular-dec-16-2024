import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostsStore } from '../services/post-store';
import { DatePipe } from '@angular/common';
import { RelativeTimeComponent } from '@shared';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RelativeTimeComponent],
  template: `
    <div class="flex  flex-col gap-4">
      @for (post of store.posts(); track post.id) {
        <div class=" card bg-base-200 shadow-xl">
          <div class="card-body">
            <p class="card-title uppercase font-black">
              {{ post.name }}
            </p>

            <p>
              <a
                [href]="post.link"
                target="_blank"
                class="link text-blue-600"
                >{{ post.link }}</a
              >
            </p>
            <p class="text-lg  font-semibold">
              {{ post.description }}
            </p>
            <p>
              <span class="font-bold">Posted By: </span> {{ post.postedBy }}
            </p>
            <p>
              {{ post.datePosted | date: 'medium' }}
              <span class="text-sm   from-neutral-100 font-extralight">
                (<app-relative-time [date]="post.datePosted" />)
              </span>
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class ListComponent {
  store = inject(PostsStore);
}
