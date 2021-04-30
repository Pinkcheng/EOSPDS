import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDeleteMissionComponent } from './dialog-delete-mission/dialog-delete-mission.component';
import { DialogAddMissionComponent } from './dialog-add-mission/dialog-add-mission.component';
import { FormsModule } from '@angular/forms';
import { DialogAddPorterComponent } from './dialog-add-porter/dialog-add-porter.component';
import { DialogAddStaffComponent } from './dialog-add-staff/dialog-add-staff.component';
import { DialogDeletePorterComponent } from './dialog-delete-porter/dialog-delete-porter.component';
import { DialogUpdatePorterComponent } from './dialog-update-porter/dialog-update-porter.component';
import { DialogUpdateStaffComponent } from './dialog-update-staff/dialog-update-staff.component';
import { DialogDeleteStaffComponent } from './dialog-delete-staff/dialog-delete-staff.component';
import { DialogManualDispatchComponent } from './dialog-manual-dispatch/dialog-manual-dispatch.component';
import { DialogAutoDispatchComponent } from './dialog-auto-dispatch/dialog-auto-dispatch.component';
import { ShareModule } from '../share';
import { DialogAddDepartmentComponent } from './dialog-add-department/dialog-add-department.component';
import { DialogAddMissionTypeComponent } from './dialog-add-mission-type/dialog-add-mission-type.component';
import { DialogUpdateMissionTypeComponent } from './dialog-update-mission-type/dialog-update-mission-type.component';
import { DialogUpdateDepartmentComponent } from './dialog-update-department/dialog-update-department.component';
import { DialogDeleteDepartmentComponent } from './dialog-delete-department/dialog-delete-department.component';
import { DialogDeleteMissionTypeComponent } from './dialog-delete-mission-type/dialog-delete-mission-type.component';
import { DialogLogoutComponent } from './dialog-logout/dialog-logout.component';
import { SelectModule } from '../select/select.module';
import { DialogUpdateMissionComponent } from './dialog-update-mission/dialog-update-mission.component';



@NgModule({
  declarations: [
    DialogDeleteMissionComponent,
    DialogAddMissionComponent,
    DialogAddPorterComponent,
    DialogAddStaffComponent,
    DialogDeletePorterComponent,
    DialogUpdatePorterComponent,
    DialogUpdateStaffComponent,
    DialogDeleteStaffComponent,
    DialogManualDispatchComponent,
    DialogAutoDispatchComponent,
    DialogAddDepartmentComponent,
    DialogAddMissionTypeComponent,
    DialogUpdateMissionTypeComponent,
    DialogUpdateDepartmentComponent,
    DialogDeleteDepartmentComponent,
    DialogDeleteMissionTypeComponent,
    DialogLogoutComponent,
    DialogUpdateMissionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    SelectModule,
  ],
  exports: [
  ]
})
export class DialogModule { }
