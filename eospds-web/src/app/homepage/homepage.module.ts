import { DialogLogoutComponent } from './../dialog/dialog-logout/dialog-logout.component';
import { DialogDeleteDepartmentComponent } from './../dialog/dialog-delete-department/dialog-delete-department.component';
import { DialogUpdateDepartmentComponent } from './../dialog/dialog-update-department/dialog-update-department.component';
import { DialogAddDepartmentComponent } from './../dialog/dialog-add-department/dialog-add-department.component';
import { DialogDeleteMissionTypeComponent } from './../dialog/dialog-delete-mission-type/dialog-delete-mission-type.component';
import { DialogUpdateMissionTypeComponent } from './../dialog/dialog-update-mission-type/dialog-update-mission-type.component';
import { DialogAddMissionTypeComponent } from './../dialog/dialog-add-mission-type/dialog-add-mission-type.component';
import { ButtonModule } from './../button/button.module';
import { DialogModule } from './../dialog/dialog.module';
import { MissionStatusPipe } from './../pipe/mission-status.pipe';
import { PorterStatusPipe } from './../pipe/porter-status.pipe';
import { PorterTypePipe } from './../pipe/porter-type.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageMissionComponent } from './homepage-mission/homepage-mission.component';
import { HomepageStaffComponent } from './homepage-staff/homepage-staff.component';
import { HomepageSettingComponent } from './homepage-setting/homepage-setting.component';
import { FormsModule } from '@angular/forms'
import { HomepageMissionCheckboxComponent } from './homepage-mission-checkbox/homepage-mission-checkbox.component';
import { HomepageMissionListComponent } from './homepage-mission-list/homepage-mission-list.component';
import { HomepageMissionDataComponent } from './homepage-mission-data/homepage-mission-data.component';
import { HomepagePorterComponent } from './homepage-porter/homepage-porter.component';
import { HomepagePorterCheckboxComponent } from './homepage-porter-checkbox/homepage-porter-checkbox.component';
import { DialogMissionDataComponent } from '../dialog/dialog-mission-data/dialog-mission-data.component';
import { DialogDeleteMissionComponent } from '../dialog/dialog-delete-mission/dialog-delete-mission.component';
import { DialogAddMissionComponent } from './../dialog/dialog-add-mission/dialog-add-mission.component';
import { DialogUpdateStaffComponent } from '../dialog/dialog-update-staff/dialog-update-staff.component';
import { DialogAddStaffComponent } from '../dialog/dialog-add-staff/dialog-add-staff.component';
import { DialogDeleteStaffComponent } from '../dialog/dialog-delete-staff/dialog-delete-staff.component';
import { DialogAddPorterComponent } from '../dialog/dialog-add-porter/dialog-add-porter.component';
import { DialogUpdatePorterComponent } from '../dialog/dialog-update-porter/dialog-update-porter.component';
import { DialogDeletePorterComponent } from '../dialog/dialog-delete-porter/dialog-delete-porter.component';
import { ShareModule } from '../share';
import { HomepageSettingDepartmentComponent } from './homepage-setting-department/homepage-setting-department.component';
import { HomepageSettingMissionTypeComponent } from './homepage-setting-mission-type/homepage-setting-mission-type.component';
import { HomepageSettingInformationComponent } from './homepage-setting-information/homepage-setting-information.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HomepageHeaderComponent,
    HomepageMissionComponent,
    HomepageStaffComponent,
    HomepageSettingComponent,
    MissionStatusPipe,
    PorterStatusPipe,
    PorterTypePipe,
    HomepageMissionCheckboxComponent,
    HomepageMissionListComponent,
    HomepageMissionDataComponent,
    HomepagePorterComponent,
    HomepagePorterCheckboxComponent,
    HomepageSettingDepartmentComponent,
    HomepageSettingMissionTypeComponent,
    HomepageSettingInformationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ShareModule
  ],
  exports: [HomepageComponent],
  entryComponents: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent,
    DialogAddMissionComponent,
    DialogAddPorterComponent,
    DialogUpdatePorterComponent,
    DialogDeletePorterComponent,
    DialogAddStaffComponent,
    DialogUpdateStaffComponent,
    DialogDeleteStaffComponent,
    DialogAddMissionTypeComponent,
    DialogUpdateMissionTypeComponent,
    DialogDeleteMissionTypeComponent,
    DialogAddDepartmentComponent,
    DialogUpdateDepartmentComponent,
    DialogDeleteDepartmentComponent,
    DialogLogoutComponent
  ]
})
export class HomepageModule { }
