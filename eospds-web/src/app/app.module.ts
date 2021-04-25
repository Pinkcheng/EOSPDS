import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageModule } from './homepage/homepage.module';
import { HttpService } from './service/http.service';
import { LoginpageModule } from './loginpage/loginpage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from './dialog/dialog.module';
import { ButtonModule } from './button/button.module';
import { AuthService, TokenAuthHttpInterceptor } from './service/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './service/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StartupService } from './service/startup.service';
import { ShareModule } from './share/share.module';
export function startupServiceFactory(startupService: StartupService): Function { return () => startupService.load(); }

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
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          console.log("tokenGetter called = " + localStorage.getItem('access_token'))
          return localStorage.getItem('access_token');
        },
        allowedDomains: ["localhost:4200"],
      }
    }),
    ShareModule

  ],
  bootstrap: [AppComponent],
  providers: [
    HttpService,
    AuthService,
    UserService,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService, Injector],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthHttpInterceptor,
      multi: true,
    }
  ]
})
export class AppModule { }
