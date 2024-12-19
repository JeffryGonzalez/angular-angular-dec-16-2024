import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lrc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <p>LRC Stuff Goes Here</p>
    <router-outlet />
  `,
  styles: ``,
})
export class LrcComponent {}
