import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
<<<<<<< HEAD
import { authGuard } from './interceptors/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard] // добавляем защиту маршрута
  },
];

=======

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];
>>>>>>> 39df03afda20cb9ed8290d7a0e0378500b0c4153
export const appRoutes = provideRouter(routes);