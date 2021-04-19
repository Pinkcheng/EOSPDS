import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [LoginpageComponent]
})
export class LoginpageModule { }
