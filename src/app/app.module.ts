import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { RouterModule } from '@angular/router';
import { EinsteinsComponent } from './einsteins/einsteins.component';
import { FreshiiComponent } from './freshii/freshii.component';
import { TacoComponent } from './taco/taco.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadBannerComponent,
    EinsteinsComponent,
    FreshiiComponent,
    TacoComponent,
    AboutComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'einsteins', component: EinsteinsComponent},
      {path: 'freshii', component: FreshiiComponent},
      {path: 'tacotaco', component: TacoComponent},
      {path: 'about', component: AboutComponent},
      {path: 'cart', component: CartComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
