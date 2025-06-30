import { Routes } from '@angular/router';
import { RayComponent } from './ray/ray.component';

export const routes: Routes = [
    {
        path: 'ray',
        redirectTo: 'ray/component',
        pathMatch: 'full',
    },
    {
        path: 'ray/component',
        component: RayComponent,
    },
];
