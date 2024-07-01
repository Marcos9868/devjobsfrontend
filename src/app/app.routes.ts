import { Routes } from '@angular/router';
import { DefaultHomeComponent } from './pages/default-home/default-home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authorizedGuard } from './core/guards/authorized.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: DefaultHomeComponent,
    canActivate: [authorizedGuard],
  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [guestGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
