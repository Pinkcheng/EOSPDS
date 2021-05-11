import { Department } from './../../models/department';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDepartmentComponent } from 'src/app/dialog/dialog-add-department/dialog-add-department.component';
import { DialogUpdateDepartmentComponent } from 'src/app/dialog/dialog-update-department/dialog-update-department.component';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';
@Component({
  selector: 'app-homepage-setting-department',
  templateUrl: './homepage-setting-department.component.html',
  styleUrls: ['./homepage-setting-department.component.css']
})
export class HomepageSettingDepartmentComponent implements OnInit {

  constructor(public dialog: MatDialog, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getDepartmentList().subscribe((res: Response) => this.departmentList = res.data)
  }

  departmentList!: Department[];
  mouseEnterIndex: number = 0;
  mouseEnterDepartmentId: string = "";
  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterDepartmentId = this.departmentList[this.mouseEnterIndex].id;
  };

  addDepartmentDialog() {
    this.dialog.open(DialogAddDepartmentComponent, {
      width: '550px',
      height: '350px',
    });
  }
  updateDepartmentList() {
    this.api.getDepartmentList().subscribe((res: Response) => this.departmentList = res.data)
  }

  updateDepartmentDialog() {
    this.dialog.open(DialogUpdateDepartmentComponent, {
      width: '400px',
      height: '400px',
      data: {
        departmentId: this.mouseEnterDepartmentId
      }
    });
  }
}
