import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponent } from './components/list.component';
import { EntryComponent } from './components/entry.component';

@Component({
  selector: 'app-lrc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListComponent, EntryComponent],
  template: `
    <p>LRC Stuff Goes Here</p>
    <div class="flex">
      <app-lrc-list />
      <app-lrc-entry />
    </div>
  `,
  styles: ``,
})
export class LrcComponent {}
