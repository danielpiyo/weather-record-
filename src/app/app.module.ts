
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { WeatherDetails } from './weatherDetails/weatherDetails.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'', component: WeatherDetails }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
