import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteMissionComponent } from '../dialog-delete-mission/dialog-delete-mission.component';

@Component({
  selector: 'app-dialog-update-mission',
  templateUrl: './dialog-update-mission.component.html',
  styleUrls: ['./dialog-update-mission.component.css']
})
export class DialogUpdateMissionComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) {
    //console.log(data.missionId)//欲修改之missionid
  }

  missionData = {
    "id": "M100100000000202103310001",
    "content": "5055-1 李冠億",
    "type": "檢體",
    "add_time": "2021/03/31 02:31",
    "dispatch_time": "2021/03/31 02:31",
    "start_time": "2021/03/31 02:31",
    "finish_time": "2021/03/31 02:31",
    "start_department": "新醫療大樓5F-5B病房",
    "end_department": "舊醫療大樓1F-檢驗醫學部",
    "porter": "沈泓成",
    "staff": "陳怡均"
  }

  ngOnInit(): void {
    //get mission data http
    console.log(123)
  }
  deleteMissionDialog() {
    this.dialog.open(DialogDeleteMissionComponent, {
      width: '300px',
      height: '200px',
      data: {
        missionId: this.missionData.id
      }
    });
  }
}
