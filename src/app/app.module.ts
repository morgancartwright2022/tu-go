import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { LoginModalComponent } from './home/login-modal/login-modal';
import { RouterModule } from '@angular/router';
import { EinsteinsComponent } from './einsteins/einsteins.component';
import { FreshiiComponent } from './freshii/freshii.component';
import { TacoComponent } from './taco/taco.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadBannerComponent,
    LoginModalComponent,
    EinsteinsComponent,
    FreshiiComponent,
    TacoComponent,
    AboutComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'einsteins', component: EinsteinsComponent},
      {path: 'freshii', component: FreshiiComponent},
      {path: 'tacotaco', component: TacoComponent},
      {path: 'about', component: AboutComponent},
      {path: 'account', component: AccountComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
