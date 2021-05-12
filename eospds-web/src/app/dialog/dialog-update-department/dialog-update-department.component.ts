import { Department } from './../../models/department';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { DialogDeleteDepartmentComponent } from '../dialog-delete-department/dialog-delete-department.component';
import { Response } from '../../models'
import { ErrorService } from 'src/app/service/error.service';

@Component({
  selector: 'app-dialog-update-department',
  templateUrl: './dialog-update-department.component.html',
  styleUrls: ['./dialog-update-department.component.css']
})
export class DialogUpdateDepartmentComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService, public err: ErrorService) { }
  departmentData!: Department;

  departmentId: string = "";
  departmentName: string = "";
  buildingName: string = "";
  floor: string = "";
  ngOnInit(): void {
    this.api.getDepartmentData(this.data.departmentId).subscribe(
      (res: Response) => {
        this.departmentData = res.data;
        this.departmentId = this.departmentData.id;
        this.buildingName = this.departmentData.building.id;
        this.floor = this.departmentData.floor;
        this.departmentName = this.departmentData.name;
      })
  }
  updateDepartment() {

    if (this.departmentName != "") {
      let body = new URLSearchParams();
      if (this.departmentName != this.departmentData.name) {
        body.set('name', this.departmentName);
        this.api.updateDepartmentData(this.data.departmentId, body).subscribe(
          (res: Response) => {
            this.err.handleResponse(res);
            this.dialog.closeAll();
          })
      } else {
        this.err.errorDataUnChange()
      }
    } else {
      this.err.errorDataUnComplete()
    }
  }
  deleteDepartmentDialog() {
    this.dialog.open(DialogDeleteDepartmentComponent, {
      width: '350px',
      height: '220px',
      data: {
        departmentId: this.data.departmentId
      }
    });
  }
}
