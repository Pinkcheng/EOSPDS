import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { MissionInstrument } from './../../models/missionInstrument';
import { ErrorService } from 'src/app/service/error.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteMissionComponent } from '../dialog-delete-mission/dialog-delete-mission.component';
import { DialogManualDispatchComponent } from '../dialog-manual-dispatch/dialog-manual-dispatch.component';

@Component({
  selector: 'app-dialog-update-mission',
  templateUrl: './dialog-update-mission.component.html',
  styleUrls: ['./dialog-update-mission.component.css']
})
export class DialogUpdateMissionComponent implements OnInit {

  missionInstrumentList: MissionInstrument[] = [];
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public err: ErrorService, public api: ApiService) {
    //console.log(data.missionId)//欲修改之missionid
    this.api.getMissionInstrumentList().subscribe(res => this.missionInstrumentList = res.data)
  }

  missionData = {
    "id": "M100100000000202103310001",
    "content": "5055-1 李冠億",
    "type": "T0001",
    "label": "L0001",
    "instrument": "I0001",
    "startBuildingId": "B0001",
    "startDepartmentId": "D1001",
    "endBuildingId": "B0002",
    "endDepartmentId": "D1004",
    "porter": "沈泓成",
  }

  ngOnInit(): void {
    //get mission data http

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
  updateMission() {
    if (this.missionData.label != "" && this.missionData.instrument != "" &&
      this.missionData.startDepartmentId != "" && this.missionData.endDepartmentId != "" && this.missionData.porter != "") {
      console.log(this.missionData.label, this.missionData.instrument,
        this.missionData.startDepartmentId, this.missionData.endDepartmentId, this.missionData.porter)
    } else {
      this.err.errorDataUnComplete();
    }
  }

  getSelectMIssionLabelId($event: any) {
    this.missionData.label = $event;
  }
  getSelectStartDepartmentId($event: any) {
    this.missionData.startDepartmentId = $event;
  }
  getSelectEndDepartmentId($event: any) {
    this.missionData.endDepartmentId = $event;
  }
  getSelectStartBuildingId($event: any) {
    this.missionData.startBuildingId = $event;
  }
  getSelectEndBuildingId($event: any) {
    this.missionData.endBuildingId = $event;
  }

  manualDispatchDiaolog() {
    this.dialog.open(DialogManualDispatchComponent, {
      width: '500px',
      height: '500px',
      data: {
        checkMissionList: [this.missionData.id]
      }
    });
  }
}
