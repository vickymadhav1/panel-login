import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {  HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatInputModule,MatFormFieldModule,
        MatAutocompleteModule,
         MatButtonModule,
         MatSelectModule,
         MatIconModule,
         MatCardModule  } from '@angular/material';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './sub-main/sub-main.component';
import { AlertsModule } from 'angular-alert-module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubMainComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    AlertsModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
