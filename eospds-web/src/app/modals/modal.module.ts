import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddMissionComponent } from './modal-add-mission/modal-add-mission.component';



@NgModule({
  declarations: [
    ModalAddMissionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalAddMissionComponent
  ]
})
export class ModalModule { }
