import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonManualDispatchComponent } from './button-manual-dispatch/button-manual-dispatch.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonAutoDispatchComponent } from './button-auto-dispatch/button-auto-dispatch.component';
import { DialogModule } from '../dialog/dialog.module';
import { DialogAutoDispatchComponent } from '../dialog/dialog-auto-dispatch/dialog-auto-dispatch.component';
import { DialogManualDispatchComponent } from '../dialog/dialog-manual-dispatch/dialog-manual-dispatch.component';



@NgModule({
  declarations: [
    ButtonManualDispatchComponent,
    ButtonAutoDispatchComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DialogModule,
  ],
  exports: [
    ButtonManualDispatchComponent,
    ButtonAutoDispatchComponent
  ],
  entryComponents: [
    DialogAutoDispatchComponent,
    DialogManualDispatchComponent
  ]
})
export class ButtonModule { }
