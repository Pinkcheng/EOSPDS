import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteStaffComponent } from '../dialog-delete-staff/dialog-delete-staff.component';

@Component({
  selector: 'app-dialog-update-staff',
  templateUrl: './dialog-update-staff.component.html',
  styleUrls: ['./dialog-update-staff.component.css']
})
export class DialogUpdateStaffComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log(this.data.staffId)
   }

  ngOnInit(): void {
  }

  staffData = {
    "id": "S00000001",
    "name": "王士嘉",
    "handover": 10,
    "professional": "護理師",
    "department": "新醫療大樓-5B病房",
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
}
