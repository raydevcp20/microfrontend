import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WebComponentWrapperComponent, WrapperConfig } from './web-component-wrapper/web-component-wrapper.component';
import { startsWith } from './starts-with';
import { loginGuard } from './guards/login.guard';
import { CoreComponent } from './pages/core/core.component';

export const routes: Routes = [
  { path: '', redirectTo: '/core', pathMatch: 'full' },
  { path: 'core', component: CoreComponent},
  // {
  //   path: 'home',
  //   loadComponent: () =>
  //     loadRemoteModule('mfe1', './Component').then((m) => m.HomeComponent),
  //   canActivate: [loginGuard]
  // },
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
