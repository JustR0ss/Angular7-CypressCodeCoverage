import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {APP_BASE_HREF} from '@angular/common';
import { SecondpageComponent } from './SecondPage/secondpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
