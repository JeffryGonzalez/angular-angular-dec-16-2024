import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
export const BY_VALUES = [1, 3, 5] as const;
type ByValues = (typeof BY_VALUES)[number];
type CounterState = {
  current: number;
  by: ByValues;
};
export const CounterStore = signalStore(
  withState<CounterState>({ current: 0, by: 1 }),
  withMethods((store) => {
    return {
      setBy: (by: ByValues) => patchState(store, { by }),
      increment: () =>
        patchState(store, { current: store.current() + store.by() }),
      decrement: () =>
        patchState(store, { current: store.current() - store.by() }),
    };
  }),
  withComputed((store) => {
    return {
      byValues: computed(() => BY_VALUES),
      decrementDisabled: computed(() => store.current() - store.by() < 0),
      fizzBuzz: computed(() => {
        const current = store.current();
        if (current === 0) {
          return '';
        }
        if (isFizzBuzz(current)) {
          return 'FizzBuzz';
        }
        if (isFizz(current)) {
          return 'Fizz';
        }
        if (isBuzz(current)) {
          return 'Buzz';
        }
        return '';
      }),
    };
  }),
);

function isFizz(n: number) {
  return n % 3 === 0;
}
function isBuzz(n: number) {
  return n % 5 === 0;
}
function isFizzBuzz(n: number) {
  return isFizz(n) && isBuzz(n);
}
