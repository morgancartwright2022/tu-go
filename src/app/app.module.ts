import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { LoginModalComponent } from './home/login-modal/login-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadBannerComponent,
    BootstrapTestComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
