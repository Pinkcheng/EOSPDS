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
  departmentData: Department = {
    id: "",
    building: {
      id: "",
      name: "",
    },
    floor: "",
    name: "",
  };
  ngOnInit(): void {
    this.api.getDepartmentData(this.data.departmentId).subscribe((res: Response) => this.departmentData = res.data)
  }
  updateDepartment() {
    let body = new URLSearchParams();
    body.set('name', this.departmentData.name);
    this.api.updateDepartmentData(this.data.departmentId, body).subscribe(
      (res: Response) => {
        this.err.handleResponse(res);
        this.dialog.closeAll();
      })
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
