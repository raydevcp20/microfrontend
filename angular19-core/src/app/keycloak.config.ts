import {
  AutoRefreshTokenService,
  createInterceptorCondition,
  IncludeBearerTokenCondition,
  provideKeycloak,
  UserActivityService,
  withAutoRefreshToken,
} from 'keycloak-angular';
export const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:8181)(\/.*)?$/i,
  bearerPrefix: 'Bearer',
});

export const provideKeycloakAngular = () => 
  provideKeycloak({
    config: {
      "url": "https://sso.usto.re",
      "realm": "gpon",
      "clientId": "ucloud-front"
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${window.location.origin}/assets/silent-check-sso.html`,
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout',
        sessionTimeout: 60000,
      }),
    ],
    providers: [AutoRefreshTokenService, UserActivityService],
  });
