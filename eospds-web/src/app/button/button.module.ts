import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonManualDispatchComponent } from './button-manual-dispatch/button-manual-dispatch.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ButtonManualDispatchComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ButtonManualDispatchComponent
  ]
})
export class ButtonModule { }
