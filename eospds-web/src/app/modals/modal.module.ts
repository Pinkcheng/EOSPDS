import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddMissionComponent } from './modal-add-mission/modal-add-mission.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ModalAddMissionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    ModalAddMissionComponent
  ]
})
export class ModalModule { }
