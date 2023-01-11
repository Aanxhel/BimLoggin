import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInViewRoutingModule } from './sign-in-view-routing.module';
import { SignInViewComponent } from './sign-in-view.component';


@NgModule({
  declarations: [
    SignInViewComponent
  ],
  imports: [
    CommonModule,
    SignInViewRoutingModule
  ]
})
export class SignInViewModule { }
