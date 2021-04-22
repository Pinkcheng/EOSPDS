import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMissionDataComponent } from './dialog-mission-data/dialog-mission-data.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { DialogDeleteMissionComponent } from './dialog-delete-mission/dialog-delete-mission.component';



@NgModule({
  declarations: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent
  ]
})
export class DialogModule { }
