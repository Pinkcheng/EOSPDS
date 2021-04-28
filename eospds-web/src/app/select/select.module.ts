import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBuildingComponent } from './select-building/select-building.component';
import { FormsModule } from '@angular/forms';
import { SelectDepartmentComponent } from './select-department/select-department.component';



@NgModule({
  declarations: [
    SelectBuildingComponent,
    SelectDepartmentComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    SelectBuildingComponent
  ]
})
export class SelectModule { }
