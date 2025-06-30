import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WebComponentWrapperComponent, WrapperConfig } from './web-component-wrapper/web-component-wrapper.component';
import { startsWith } from './starts-with';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.HomeComponent),
  },
  // { path: 'ray', loadComponent: () => loadRemoteModule('ray','./ray').then(m => {
  //     // Adiciona o elemento no router-outlet
  //     const outlet = document.querySelector('router-outlet');
  //     if (outlet?.parentElement) {
  //     const element = document.createElement('ray-component'); // Use o seletor correto
  //     outlet.parentElement.appendChild(element);
  //     }
  //     debugger;
  //     return null; // Não renderiza diretamente como componente Angular
  // })
  // },
//   {
//     path: 'ray',
//     loadComponent: () =>
//       import('./web-component-wrapper/web-component-wrapper.component').then(
//         (m) => m.WebComponentWrapperComponent
//       ),
//   },
  {
    matcher: startsWith('ray'),
    component: WebComponentWrapperComponent,
    data: {
      config: {
        remoteName: 'ray',
        exposedModule: './ray',
        elementName: 'ray-component',
      } as WrapperConfig,
    },
  },
];
