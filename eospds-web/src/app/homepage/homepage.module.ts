import { MissionStatusPipe } from './../pipe/mission-status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageMissionComponent } from './homepage-mission/homepage-mission.component';
import { HomepageStaffComponent } from './homepage-staff/homepage-staff.component';
import { HomepageSettingComponent } from './homepage-setting/homepage-setting.component';
import { ModalModule } from '../modals/modal.module';
import {FormsModule} from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    HomepageComponent,
    HomepageHeaderComponent,
    HomepageMissionComponent,
    HomepageStaffComponent,
    HomepageSettingComponent,
    MissionStatusPipe,

  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports:[HomepageComponent]
})
export class HomepageModule { }
