import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageModule } from './homepage/homepage.module';
import { HttpService } from './service/http.service';
import { ErrorService } from './service/error.service';
import { LoginpageModule } from './loginpage/loginpage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from './dialog/dialog.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageModule,
    LoginpageModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, ErrorService]
})
export class AppModule { }
