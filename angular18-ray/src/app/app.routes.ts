import { Routes } from '@angular/router';
import { RayComponent } from './ray/ray.component';

// const paths: Routes = [
//   {path: 'users', loadChildren: () => import('./ray/ray.routes').then((m) => m.routes)},
// ];
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ray',
        pathMatch: 'full',
    },
    {
        path: 'ray',
        component: RayComponent,
    },
];


