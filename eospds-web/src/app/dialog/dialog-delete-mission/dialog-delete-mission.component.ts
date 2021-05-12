import { ErrorService } from 'src/app/service/error.service';
import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-mission',
  templateUrl: './dialog-delete-mission.component.html',
  styleUrls: ['./dialog-delete-mission.component.css']
})
export class DialogDeleteMissionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialog, public api: ApiService, public err: ErrorService) {

  }

  ngOnInit(): void {
  }

  deleteMission() {
    //delete mission http
    this.api.deleteMission(this.data.missionId).subscribe(
      res => {
        this.err.handleResponse(res)
        this.closeAll();
      })
  }
  closeAll() {
    this.dialogRef.closeAll();
  }
}
