import { ErrorService } from 'src/app/service/error.service';
import { Department } from './../../models/department';
import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeletePorterComponent } from '../dialog-delete-porter/dialog-delete-porter.component';
import { Gender, PorterData, PorterType, Response } from '../../models';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-dialog-update-porter',
  templateUrl: './dialog-update-porter.component.html',
  styleUrls: ['./dialog-update-porter.component.css']
})
export class DialogUpdatePorterComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService, public err: ErrorService) {

  }
  porterTypes: PorterType[] = [{ id: 1, name: "全院" }, { id: 2, name: "駐點" }];
  genders: Gender[] = [{ id: 1, name: "男生" }, { id: 2, name: "女生" }];

  porterId: string = "";
  porterMobile: string = "";
  porterName: string = "";
  tagNumber: string = "";
  birthday: null;
  gender: number = 0;
  type: number = 0;
  buildingId: string = "";
  departmentId: string = "";

  porterData!: PorterData;
  ngOnInit(): void {
    this.api.getPorterData(this.data.porterId).subscribe(
      (res: Response) => {
        this.porterData = res.data;
        console.log(res.data)
        this.porterId = this.porterData.id;
        this.porterMobile = this.porterData.id;
        this.porterName = this.porterData.name;
        this.tagNumber = this.porterData.tagNumber;
        this.gender = this.porterData.gender;
        this.type = this.porterData.type.id;
        this.buildingId = this.porterData.department.building.id;
        console.log(this.buildingId)
        this.departmentId = this.porterData.department.id;
      })
  }
  updatePorter() {
    if (this.type == 1) {
      this.departmentId = 'D1000001';
    }
    if (this.porterMobile.trim() != "" && this.porterName.trim() != "" && this.tagNumber.trim() != "" && this.departmentId != "") {
      let body = new URLSearchParams();
      let isChange: boolean = false;
      if (this.porterMobile.trim() != this.porterData.id) {//需改成電話
        body.set('mobile', this.porterMobile);
        isChange = true;
      }
      if (this.porterName.trim() != this.porterData.name) {
        body.set('name', this.porterMobile);
        isChange = true;
      }
      if (this.tagNumber.trim() != this.porterData.tagNumber) {
        body.set('tagNumber', this.porterMobile);
        isChange = true;
      }
      if (this.gender != this.porterData.gender) {
        body.set('gender', this.gender.toString());
        isChange = true;
      }
      if (this.type != this.porterData.type.id) {
        body.set('type', this.type.toString());
        isChange = true;
      }
      if (this.departmentId != this.porterData.department.id) {
        body.set('department', this.departmentId);
        isChange = true;
      }
      if (isChange) {
        console.log(body.toString())
        //this.api.updatePorter(this.data.porterId, body).subscribe(res => this.err.handleResponse(res))
      } else {
        this.err.errorDataUnChange()
      }
    } else {
      this.err.errorDataUnComplete()
    }
  }
  deletePorterDialog() {
    this.dialog.open(DialogDeletePorterComponent, {
      width: '300px',
      height: '200px',
      data: {
        porterId: this.data.porterId
      }
    });
  }
  getSelectDepartmentId($event: any) {
    this.departmentId = $event
  }
}
