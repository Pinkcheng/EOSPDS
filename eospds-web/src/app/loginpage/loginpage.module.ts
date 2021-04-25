import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share';




@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule
  ],
  exports: [LoginpageComponent]
})
export class LoginpageModule { }
