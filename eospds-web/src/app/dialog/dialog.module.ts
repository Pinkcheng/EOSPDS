import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMissionDataComponent } from './dialog-mission-data/dialog-mission-data.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { DialogDeleteMissionComponent } from './dialog-delete-mission/dialog-delete-mission.component';
import { DialogAddMissionComponent } from './dialog-add-mission/dialog-add-mission.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent,
    DialogAddMissionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent
  ]
})
export class DialogModule { }
