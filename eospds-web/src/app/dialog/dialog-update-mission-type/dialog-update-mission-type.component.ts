import { MissionLabel, MissionType } from 'src/app/models';
import { ApiService } from 'src/app/service/api.service';
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

  missionTypeId: string = "";
  missionLabelName: string = "";
  missionLabelData!: MissionLabel;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public err: ErrorService,
    public api: ApiService) { }


  ngOnInit(): void {
    //get specific mission label data
    this.api.getMissionLabelData(this.data.missionTypeId).subscribe(
      res => {
        this.missionLabelData = res.data;
        this.missionTypeId = this.missionLabelData.type.id;
        this.missionLabelName = this.missionLabelData.name;
      })
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
    if (this.missionLabelName != "") {
      let body = new URLSearchParams();
      let isChange: boolean = false;
      if (this.missionTypeId != this.missionLabelData.type.id || this.missionLabelName != this.missionLabelData.name) {
        body.set('missionTypeID', this.missionTypeId);
        body.set('name', this.missionLabelName);
        isChange = true;
      }
      if (isChange) {
        this.api.updateMissionLableData(this.data.missionTypeId, body).subscribe(
          res => {
            this.err.handleResponse(res);
            this.dialog.closeAll();
          })
      } else {
        this.err.errorDataUnChange
      }

    } else {
      this.err.errorDataUnComplete();
    }

  }
  getSelectMissionTypeChange($event: any) {
    this.missionLabelData.type.id = $event;
  }
}
