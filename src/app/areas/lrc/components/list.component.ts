import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <h1>List of Posts</h1> `,
  styles: ``,
})
export class ListComponent {}
