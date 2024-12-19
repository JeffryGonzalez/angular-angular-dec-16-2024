import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntryComponent } from './components/entry.component';
import { ListComponent } from './components/list.component';

@Component({
  selector: 'app-lrc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListComponent, EntryComponent],
  template: `
    <p>LRC Stuff Goes Here</p>
    <div class="flex gap-4">
      <div class="w-1/2">
        <app-lrc-list />
      </div>
      <div class="w-1/2">
        <app-lrc-entry />
      </div>
    </div>
  `,
  styles: ``,
})
export class LrcComponent {}
