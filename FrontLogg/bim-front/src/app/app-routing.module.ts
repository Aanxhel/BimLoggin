import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: 'logview', loadChildren: () => import('./modules/log-view/log-view.module').then(m => m.LogViewModule) },  

  //se coloca siempre al finalr para encontrar el path home
  { path: '**', pathMatch: 'full', redirectTo: 'loginview' },
  { path: '', pathMatch: 'full', redirectTo: 'loginview' },

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
