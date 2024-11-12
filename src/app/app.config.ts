import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideNgIconLoader } from '@ng-icons/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore(),
    provideEffects(),
    provideHttpClient(),
    provideNgIconLoader((name) => {
      console.log('api', name);
      const http = inject(HttpClient);
      return http.get(`/assets/icons/${name}.svg`, { responseType: 'text' });
    }),
    provideCharts(withDefaultRegisterables()),
  ],
};
