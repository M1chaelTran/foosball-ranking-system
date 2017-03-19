import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import {MomentModule} from 'angular2-moment';

import 'hammerjs';

import { FirebaseConfig } from './app.config';
import { AppComponent } from './app.component';
import { Routes, Components } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ...Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    RouterModule.forRoot(Routes),
    AngularFireModule.initializeApp(FirebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
