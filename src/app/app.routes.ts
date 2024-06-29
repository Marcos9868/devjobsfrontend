import { Routes } from '@angular/router';
import { DefaultHomeComponent } from './pages/default-home/default-home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'home', component: DefaultHomeComponent },
  { path: '', component: LoginComponent },
];
