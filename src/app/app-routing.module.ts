import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { TableComponent } from './Table/table.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
];

