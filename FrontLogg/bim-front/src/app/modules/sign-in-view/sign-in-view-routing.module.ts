import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInViewComponent } from './sign-in-view.component';

const routes: Routes = [{ path: '', component: SignInViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInViewRoutingModule { }
