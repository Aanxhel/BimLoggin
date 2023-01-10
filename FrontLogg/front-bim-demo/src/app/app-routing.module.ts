import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'log-view', loadChildren: () => import('./modules/log-view/log-view.module').then(m => m.LogViewModule) },

  { path: 'home-view', loadChildren: () => import('./modules/home-view/home-view.module').then(m => m.HomeViewModule) },




  //se coloca siempre al finalr para encontrar el path home
  { path: '**', pathMatch: 'full', redirectTo: 'log-view' },
  { path: '', pathMatch: 'full', redirectTo: 'log-view' },

  

  
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
