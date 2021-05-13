import { ErrorService } from './../../service/error.service';
import { ApiService } from './../../service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from 'src/app/models/staff';
import { DialogDeleteStaffComponent } from '../dialog-delete-staff/dialog-delete-staff.component';

@Component({
  selector: 'app-dialog-update-staff',
  templateUrl: './dialog-update-staff.component.html',
  styleUrls: ['./dialog-update-staff.component.css']
})
export class DialogUpdateStaffComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public err: ErrorService,
    public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getStaffData(this.data.staffId).subscribe(res => {
      this.staffData = res.data;
      this.staffId = this.staffData.id;
      this.name = this.staffData.name;
      this.professional = this.staffData.professional;
      //this.buildingId =this.stadff.department.building.id;
      this.departmentId = this.staffData.department.id;
    })
  }
  staffId: string = ""
  name: string = "";
  professional: string = "";
  building: string = "";
  departmentId: string = "";

  staffData!: Staff;
  updateStaff() {
    //patch specific staff //bug body需全部欄位
    if (this.name.trim() != "" && this.professional.trim() != "" && this.departmentId != "") {
      let body = new URLSearchParams();
      let isChange: boolean = false;
      if (this.name.trim() != this.staffData.name) {
        body.set('name', this.name.trim());
        isChange = true;
      }
      if (this.professional.trim() != this.staffData.professional) {
        body.set('professional', this.professional.trim());
        isChange = true;
      }
      if (this.departmentId != this.staffData.department.id) {
        body.set('department', this.departmentId);
        isChange = true;
      }
      if (isChange) {
        console.log(body.toString())
        this.api.updateStaff(this.data.staffId, body).subscribe(res => {
          this.err.handleResponse(res);
          this.dialog.closeAll();
        })
      } else {
        this.err.errorDataUnChange();
      }
    } else {
      this.err.errorDataUnComplete();
    }
  }
  deleteStaffDialog() {
    this.dialog.open(DialogDeleteStaffComponent, {
      width: '300px',
      height: '200px',
      data: {
        staffId: this.data.staffId
      }
    });
  }
  getSelectDepartmentId($event: any) {
    this.staffData.department.id = $event;
  }
}
