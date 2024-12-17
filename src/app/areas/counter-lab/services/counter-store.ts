import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type ByValues = 1 | 3 | 5;
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
      decrementDisabled: computed(() => store.current() - store.by() < 0),
      fizzBuzz: computed(() => {
        const current = store.current();
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
      }),
    };
  }),
);
