import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';
@Component({
  selector: 'app-dialog-delete-porter',
  templateUrl: './dialog-delete-porter.component.html',
  styleUrls: ['./dialog-delete-porter.component.css']
})
export class DialogDeletePorterComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialog, public api: ApiService) {

  }

  ngOnInit(): void {
  }
  deletePorter() {
    //delete porter http
    this.api.deletePorter("P100000002").subscribe((res: Response) => console.log(res.message))

    this.closeAll();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }

}
