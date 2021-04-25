import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteMissionTypeComponent } from '../dialog-delete-mission-type/dialog-delete-mission-type.component';

@Component({
  selector: 'app-dialog-update-mission-type',
  templateUrl: './dialog-update-mission-type.component.html',
  styleUrls: ['./dialog-update-mission-type.component.css']
})
export class DialogUpdateMissionTypeComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  missionTypeData = {
    "id": "M1007",
    "type": "物品衛材",
    "class": "運物",
    "name": "病房點滴"
  }
  deleteMissionTypeDialog() {
    this.dialog.open(DialogDeleteMissionTypeComponent, {
      width: '350px',
      height: '220px',
      data: {
        missionTypeId: this.data.missionTypeId
      }
    });
  }
}
