import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBuildingComponent } from './select-building/select-building.component';
import { FormsModule } from '@angular/forms';
import { SelectDepartmentComponent } from './select-department/select-department.component';
import { SelectMissionTypeComponent } from './select-mission-type/select-mission-type.component';
import { SelectMissionLabelComponent } from './select-mission-label/select-mission-label.component';



@NgModule({
  declarations: [
    SelectBuildingComponent,
    SelectDepartmentComponent,
    SelectMissionTypeComponent,
    SelectMissionLabelComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    SelectBuildingComponent,
    SelectDepartmentComponent
  ]
})
export class SelectModule { }
