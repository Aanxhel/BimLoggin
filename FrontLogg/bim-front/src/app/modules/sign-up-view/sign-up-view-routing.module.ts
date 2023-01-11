import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpViewComponent } from './sign-up-view.component';

const routes: Routes = [{ path: '', component: SignUpViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpViewRoutingModule { }
