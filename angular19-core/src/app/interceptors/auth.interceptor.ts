import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import Keycloak from 'keycloak-js';
const EXCLUDED_URLS = ['/assets', '/clients/public', '/i18n'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isPublic = EXCLUDED_URLS.some(url => req.url.includes(url));
  if (isPublic) return next(req);

  const keycloak = inject(Keycloak);
  // debugger;
  const token = keycloak.token;
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
