import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const paths: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: HomeComponent }
];

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: paths,
  },
  {
    path: 'admin',
    component: AppComponent,
    children: paths,
  },
];
