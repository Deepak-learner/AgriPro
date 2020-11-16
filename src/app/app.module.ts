import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketComponent } from './market/market.component';
import { AddProductComponent } from './market/add-product/add-product.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";
import { DetecthomeComponent } from './detecthome/detecthome.component';
import { PhotopredictComponent } from './photopredict/photopredict.component';
import { LivepredictComponent } from './livepredict/livepredict.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WeedopediaComponent } from './weedopedia/weedopedia.component';
import { AddweedComponent } from './addweed/addweed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketComponent,
    AddProductComponent,
    LoginComponent,
    SignupComponent,
    DetecthomeComponent,
    PhotopredictComponent,
    LivepredictComponent,
    AlertsComponent,
    WeedopediaComponent,
    AddweedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
