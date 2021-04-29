import { ErrorService } from 'src/app/service/error.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteMissionTypeComponent } from '../dialog-delete-mission-type/dialog-delete-mission-type.component';

@Component({
  selector: 'app-dialog-update-mission-type',
  templateUrl: './dialog-update-mission-type.component.html',
  styleUrls: ['./dialog-update-mission-type.component.css']
})
export class DialogUpdateMissionTypeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public err: ErrorService) { }


  ngOnInit(): void {
    //get specific mission label data
  }
  missionLabelData = {
    "id": "L0001",
    "name": "一般病房病人轉床至8W",
    "type": {
      "id": "T0001",
      "name": "轉床",
      "transport": {
        "id": 1,
        "name": "運人"
      }
    }
  }
  deleteMissionTypeDialog() {
    this.dialog.open(DialogDeleteMissionTypeComponent, {
      width: '350px',
      height: '220px',
      data: {
        missionTypeId: this.missionLabelData.id
      }
    });
  }
  updateMissionLabel() {
    //patch specific mission label data
    if (this.missionLabelData.type.id != "" && this.missionLabelData.name != "") {
      let body = new URLSearchParams();
      body.set('id', this.missionLabelData.type.id);
      body.set('id', this.missionLabelData.name)
      console.log(this.missionLabelData.type.id, this.missionLabelData.name)
      this.dialog.closeAll();
    } else {
      this.err.errorDataUnComplete();
    }

  }

  getSelectMissionTypeChange($event: any) {
    this.missionLabelData.type.id = $event;
  }
}
