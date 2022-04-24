import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadBannerComponent,
    BootstrapTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
