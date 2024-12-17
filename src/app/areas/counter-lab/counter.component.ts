import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Counter Component Goes Here</p> `,
  styles: ``,
})
export class CounterComponent {}
