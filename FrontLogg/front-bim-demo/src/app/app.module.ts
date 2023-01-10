import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogViewComponent } from './modules/log-view/log-view.component';
import { HomeViewModule } from './modules/home-view/home-view.module';

@NgModule({
  declarations: [
    AppComponent,
    LogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
