import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpViewRoutingModule } from './sign-up-view-routing.module';
import { SignUpViewComponent } from './sign-up-view.component';


@NgModule({
  declarations: [
    SignUpViewComponent
  ],
  imports: [
    CommonModule,
    SignUpViewRoutingModule
  ]
})
export class SignUpViewModule { }
