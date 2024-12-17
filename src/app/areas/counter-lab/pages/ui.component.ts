import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="decrementDisabled()"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>
    <span class="text-3xl text-accent animate-pulse">{{ fizzBuzz() }}</span>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);
  decrementDisabled = computed(() => this.current() === 0);
  increment() {
    this.current.update((c) => c + 1);
  }

  fizzBuzz = computed(() => {
    const current = this.current();
    if (current === 0) {
      return '';
    }
    if (current % 3 === 0 && current % 5 === 0) {
      return 'FizzBuzz';
    }
    if (current % 3 === 0) {
      return 'Fizz';
    }
    if (current % 5 === 0) {
      return 'Buzz';
    }

    return '';
  });
  decrement() {
    this.current.update((c) => c - 1);
  }
}
