import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogViewRoutingModule } from './log-view-routing.module';
import { LogViewComponent } from './log-view.component';


@NgModule({
  declarations: [
    LogViewComponent
  ],
  imports: [
    CommonModule,
    LogViewRoutingModule
  ]
})
export class LogViewModule { }
