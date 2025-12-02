import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WebComponentWrapperComponent, WrapperConfig } from './web-component-wrapper/web-component-wrapper.component';
import { startsWith } from './starts-with';
import { loginGuard } from './guards/login.guard';
import { CoreComponent } from './pages/core/core.component';

export const routes: Routes = [
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'core', component: CoreComponent},
  {
    path: 'admin',
    loadChildren: () => loadRemoteModule('admin', './routes').then((m) => m.routes),
  },
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
  }
];
