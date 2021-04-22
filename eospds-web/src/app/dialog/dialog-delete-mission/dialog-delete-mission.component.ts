import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-mission',
  templateUrl: './dialog-delete-mission.component.html',
  styleUrls: ['./dialog-delete-mission.component.css']
})
export class DialogDeleteMissionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialogRef: MatDialog ) { console.log(data.missionId)}

  ngOnInit(): void {
  }

  deleteMission(){
    //delete mission http
    console.log("確認刪除任務");
    this.closeAll();
  }
  closeAll(){
    this.dialogRef.closeAll();
  }

}
