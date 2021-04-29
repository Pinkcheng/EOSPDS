import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Staff } from 'src/app/models/staff';
import { ErrorService } from 'src/app/service/error.service';

@Component({
  selector: 'app-dialog-add-staff',
  templateUrl: './dialog-add-staff.component.html',
  styleUrls: ['./dialog-add-staff.component.css']
})
export class DialogAddStaffComponent implements OnInit {

  staffName: string = "";
  staffProfessional: string = "";

  constructor(
    public err: ErrorService,
    public dialogRef: MatDialog) {

  }

  ngOnInit(): void {
  }

  addStaff() {
    //http post staff add 須包含所屬department
    if (this.staffName != "" && this.staffProfessional != "") {
      console.log(this.staffName, this.staffProfessional)
      this.dialogRef.closeAll();
    } else {
      this.err.errorDataUnComplete();
    }

  }

}
