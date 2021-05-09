import { ErrorService } from 'src/app/service/error.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';

@Component({
  selector: 'app-dialog-delete-department',
  templateUrl: './dialog-delete-department.component.html',
  styleUrls: ['./dialog-delete-department.component.css']
})
export class DialogDeleteDepartmentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialog,
    public api: ApiService,
    public err: ErrorService
    ) {

  }

  ngOnInit(): void {

  }
  deleteDepartment() {
    //delete porter http
    this.api.deleteDepartment("D0005").subscribe((res: Response) => this.err.handleResponse(res))

    this.closeAll();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }
}
