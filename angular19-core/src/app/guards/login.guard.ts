import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import Keycloak from 'keycloak-js';

export const loginGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(Keycloak);
  if (!keycloak.authenticated) {
    await keycloak.login({ redirectUri: window.location.origin + state.url });
  }
  return true;
};
