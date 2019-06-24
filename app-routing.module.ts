import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = 
[
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'forgotpassword', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'setnewpassword/:token', loadChildren: './set-new-password/setnewpassword.module#SetNewPasswordModule' },
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {
    path: '',
    canActivate:[AuthGuard],
    component: AdminComponent,
    children: 
    [
      {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
      {path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule',canActivateChild:[AuthGuard]}, 
      {path: 'mapping',loadChildren: './mapping/mapping.module#MappingModule',canActivateChild:[AuthGuard]}, 
      {path: 'reports',loadChildren: './reports/reports.module#ReportsModule',canActivateChild:[AuthGuard]}, 
      {path: 'administration',loadChildren: './administration/administration.module#AdministrationModule',canActivateChild:[AuthGuard]}, 
      {path: 'master',loadChildren: './master/master.module#MasterModule',canActivateChild:[AuthGuard]}, 
      {path: 'profile',loadChildren: './profile/profile.module#ProfileModule',canActivateChild:[AuthGuard]}
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
