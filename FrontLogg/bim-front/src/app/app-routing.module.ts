import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  
  { path: 'userform', loadChildren: () => import('./modules/user-form/user-form.module').then(m => m.UserFormModule) },
  
  { path: 'signinview', loadChildren: () => import('./modules/sign-in-view/sign-in-view.module').then(m => m.SignInViewModule) },

  
  { path: 'signupview', loadChildren: () => import('./modules/sign-up-view/sign-up-view.module').then(m => m.SignUpViewModule) },

  //to home default
  { path: '**', pathMatch: 'full', redirectTo: 'signupview' },
  { path: '', pathMatch: 'full', redirectTo: 'signupview' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
