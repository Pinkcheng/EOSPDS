import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';
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

  name: string = "";
  professional: string = "";
  userId: string | null = "";

  constructor(
    public err: ErrorService,
    public dialogRef: MatDialog,
    public user: UserService,
    public api: ApiService) {

  }

  ngOnInit(): void {
    this.userId = this.user.getUserId()
  }

  addStaff() {
    //http post staff add 須包含所屬department
    let body = new URLSearchParams();
    if (this.name.trim() != "") {
      body.set('name', this.name.trim());
      if (this.professional.trim() != "") {
        body.set('professional', this.professional.trim());
        if (this.userId != null) {
          body.set('department', this.userId);
          console.log(body.toString())
          this.api.addStaff(body).subscribe(res => {
            this.err.handleResponse(res);
            this.dialogRef.closeAll();
          })
        }
      } else {
        this.err.errorDataUnComplete();
      }
    } else {
      this.err.errorDataUnComplete();
    }
  }
}
