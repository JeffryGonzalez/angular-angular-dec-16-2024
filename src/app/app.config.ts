import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideExperimentalZonelessChangeDetection(),

    provideHttpClient(), // TODO: Talk about this.
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(PreloadAllModules),
    ),
  ],
};
