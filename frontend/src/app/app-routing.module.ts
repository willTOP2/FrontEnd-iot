
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HistoricoComponent } from './pages/historico/historico.component';
import { LoginComponent } from './pages/login/login.component';

import { MonitoracaoComponent } from './pages/monitoracao/monitoracao.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';





const routes: Routes = [{
  path: "login",
  component: LoginComponent   
},{
  path:"notificacao",
  component: NotificacaoComponent,
  //canActivate: [AuthGuard],
  //canLoad: [AuthGuard]
},{
  path:"",  
  component:MonitoracaoComponent,
  //canActivate: [AuthGuard],
  //canLoad: [AuthGuard]
},{
  path:"historico/:id",
  component: HistoricoComponent, 
  //canActivate: [AuthGuard],
  //canLoad: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
