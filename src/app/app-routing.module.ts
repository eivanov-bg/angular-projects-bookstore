import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@bookstore/presentation/pages/dashboard/dashboard.component';
import { SingleBookComponent } from '@bookstore/presentation/pages/single-book/single-book.component';
import { LoginComponent } from '@bookstore/presentation/pages/login/login.component';
import { AuthGuard } from '@bookstore/infrastructure/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'book/:ISBN',
    component: SingleBookComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
