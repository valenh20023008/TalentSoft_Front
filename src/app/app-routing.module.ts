import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Landing1Component } from './components/landing1/landing1.component';
import { LoginRRHHComponent } from './components/login-rrhh/login-rrhh.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  { path: '', component: Landing1Component },
  { path: 'login', component: LoginRRHHComponent },
  {path: 'planes', component: PaymentComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
