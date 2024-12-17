import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="join">
    <button
      [disabled]="store.by() === 1"
      (click)="store.setBy(1)"
      class="btn join-item"
    >
      Count By 1
    </button>
    <button
      [disabled]="store.by() === 3"
      (click)="store.setBy(3)"
      class="btn join-item"
    >
      Count By 3
    </button>
    <button
      [disabled]="store.by() === 5"
      (click)="store.setBy(5)"
      class="btn join-item"
    >
      Count By 5
    </button>
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
