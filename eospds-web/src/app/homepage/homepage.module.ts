import { MissionStatusPipe } from './../pipe/mission-status.pipe';
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

@NgModule({
  declarations: [
    HomepageComponent,
    HomepageHeaderComponent,
    HomepageMissionComponent,
    HomepageStaffComponent,
    HomepageSettingComponent,
    MissionStatusPipe,
    HomepageMissionCheckboxComponent,
    HomepageMissionListComponent,

  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
