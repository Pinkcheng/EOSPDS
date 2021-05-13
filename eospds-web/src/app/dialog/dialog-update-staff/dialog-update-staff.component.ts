import { ErrorService } from 'src/app/service/error.service';
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
    public err: ErrorService) {
  }

  ngOnInit(): void {
  }

  staffData: Staff = {
    "id": "S00000001",
    "name": "王士嘉",
    "professional": "護理師",
    "handover": 10,
    "department": {
      "id": "D1001",
      "floor": "B1",
      "name": "傳送中心"
    }
  }
  updateStaff() {
    //patch specific staff
    if (this.staffData.name != "" && this.staffData.professional != "" && this.staffData.department.id != "") {
      let body = new URLSearchParams();
      body.set('name', this.staffData.name);
      body.set('professional', this.staffData.professional);
      body.set('department', this.staffData.department.id);
      console.log(this.staffData.name, this.staffData.professional, this.staffData.department.id);
      this.dialog.closeAll();
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
