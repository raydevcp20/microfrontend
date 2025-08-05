import { Routes } from '@angular/router';
import { RayComponent } from './ray.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', component: RayComponent},
  { path: 'create', component: CreateComponent },
  { path: 'detail', component: DetailComponent}
];
