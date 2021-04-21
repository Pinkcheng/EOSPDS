import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddMissionComponent } from './modal-add-mission/modal-add-mission.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalManualDispatchComponent } from './modal-manual-dispatch/modal-manual-dispatch.component';
import { ModalAutoDispatchComponent } from './modal-auto-dispatch/modal-auto-dispatch.component';
import { ModalAddPorterComponent } from './modal-add-porter/modal-add-porter.component';



@NgModule({
  declarations: [
    ModalAddMissionComponent,
    ModalManualDispatchComponent,
    ModalAutoDispatchComponent,
    ModalAddPorterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ModalAddMissionComponent,
    ModalManualDispatchComponent,
    ModalAutoDispatchComponent,
    ModalAddPorterComponent
  ]
})
export class ModalModule { }
