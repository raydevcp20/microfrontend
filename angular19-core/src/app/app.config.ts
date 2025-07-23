import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,  includeBearerTokenInterceptor } from 'keycloak-angular';
import { tenantInterceptor } from './interceptors/tenant.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideKeycloakAngular, urlCondition } from './keycloak.config';
import { UcloudUiCoreTranslateHttpLoader } from './utils/ucloud-ui-core-http-loader';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';

const httpLoaderFactory: (http: HttpClient) => TranslateLoader = (
  http: HttpClient
) =>
  new UcloudUiCoreTranslateHttpLoader(
    http,
    './i18n/',
    '.json',
    'assets/federation.manifest.json'
  );

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([tenantInterceptor, authInterceptor, includeBearerTokenInterceptor])
    ),
    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [urlCondition]
    },
    provideTranslateService({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]
};
