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
import { ModalModule } from '../modals/modal.module';
import { FormsModule } from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomepageMissionCheckboxComponent } from './homepage-mission-checkbox/homepage-mission-checkbox.component';
import { HomepageMissionListComponent } from './homepage-mission-list/homepage-mission-list.component';
import { MatButtonModule } from '@angular/material/button';
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
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    DialogModule
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

  ]
})
export class HomepageModule { }
