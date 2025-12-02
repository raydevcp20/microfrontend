import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,  includeBearerTokenInterceptor } from 'keycloak-angular';
import { tenantInterceptor } from './interceptors/tenant.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideKeycloakAngular, urlCondition } from './keycloak.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, 
      withComponentInputBinding()),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([tenantInterceptor, authInterceptor, includeBearerTokenInterceptor])
    ),
    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [urlCondition]
    },
  ]
};
