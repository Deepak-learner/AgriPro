import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { AddProductComponent } from './market/add-product/add-product.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DetecthomeComponent } from './detecthome/detecthome.component';
import { PhotopredictComponent } from './photopredict/photopredict.component';
import { LivepredictComponent } from './livepredict/livepredict.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WeedopediaComponent } from './weedopedia/weedopedia.component';
import { AddweedComponent } from './addweed/addweed.component';

const routes: Routes = [
  { path: 'market', component: MarketComponent },
  { path: 'product', component: AddProductComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detect', component: DetecthomeComponent },
  { path: 'photo', component: PhotopredictComponent },
  { path: 'live', component: LivepredictComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'weed', component: WeedopediaComponent },
  { path: 'addWeed', component: AddweedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
