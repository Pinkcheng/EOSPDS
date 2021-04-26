import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-staff',
  templateUrl: './dialog-delete-staff.component.html',
  styleUrls: ['./dialog-delete-staff.component.css']
})
export class DialogDeleteStaffComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialog) {

   }

  ngOnInit(): void {
  }
  deletePorter() {
    //delete porter http
    this.closeAll();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }

}
