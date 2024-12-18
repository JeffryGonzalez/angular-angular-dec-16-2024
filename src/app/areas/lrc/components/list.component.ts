import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostApi } from '../services/post-api';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe, AsyncPipe],
  template: ` <h1>List of Posts</h1> `,
  styles: ``,
})
export class ListComponent {}
