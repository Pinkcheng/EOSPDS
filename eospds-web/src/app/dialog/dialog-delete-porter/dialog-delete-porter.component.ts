import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-porter',
  templateUrl: './dialog-delete-porter.component.html',
  styleUrls: ['./dialog-delete-porter.component.css']
})
export class DialogDeletePorterComponent implements OnInit {

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
