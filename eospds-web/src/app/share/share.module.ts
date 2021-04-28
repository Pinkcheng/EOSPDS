import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { AppConfig } from './app-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    AppConfig
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class ShareModule { }
