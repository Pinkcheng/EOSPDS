import { MissionData } from 'src/app/models/missionData';
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

  missionId = "";
  missionTypeId: string = "";
  missionLabelId: string = "";
  startBuildingId: string = "";
  startDepartmentId: string = "";
  endBuildingId: string = "";
  endDepartmentId: string = "";
  missionInstrumentId: string = "";
  content: string = "";
  porter: any;

  missionData!: MissionData;

  missionInstrumentList: MissionInstrument[] = [];
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public err: ErrorService, public api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getMissionData(this.data.missionId).subscribe(res => {
      this.missionData = res.data;
      //this.missionTypeId = this.missionData.type.id;
      this.missionLabelId = this.missionData.label.id;
      this.startBuildingId = this.missionData.startDepartment.building.id;
      this.startDepartmentId = this.missionData.startDepartment.id;
      this.endBuildingId = this.missionData.endDepartment.building.id;
      this.endDepartmentId = this.missionData.endDepartment.id;
      this.missionInstrumentId = this.missionData.instrument.id;
      this.content = this.missionData.content;
      this.porter = this.missionData.porter;
    })
    this.api.getMissionInstrumentList().subscribe(res => this.missionInstrumentList = res.data)

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
    let body = new URLSearchParams();
    let isChange = false;
    if (this.missionLabelId != this.missionData.label.id) {
      body.set('label', this.missionLabelId);
      isChange = true;
    }
    if (this.missionInstrumentId != this.missionData.instrument.id) {
      body.set('instrument', this.missionInstrumentId);
      isChange = true;
    }
    if (this.startDepartmentId != this.missionData.startDepartment.id) {
      body.set('startDepartment', this.startDepartmentId);
      isChange = true;
    }
    if (this.endDepartmentId != this.missionData.endDepartment.id) {
      body.set('endDepartment', this.endDepartmentId);
      isChange = true;
    }
    if (this.content != this.missionData.content) {
      body.set('content', this.content);
      isChange = true;
    }
    if (isChange) {
      this.api.updateMission(this.data.missionId, body).subscribe(res => this.err.handleResponse(res))
    } else {
      this.err.errorDataUnChange();
    }
  }

  getSelectMissionLabelId($event: any) {
    this.missionLabelId = $event;
  }
  getSelectStartDepartmentId($event: any) {
    this.startDepartmentId = $event;
  }
  getSelectEndDepartmentId($event: any) {
    this.endDepartmentId = $event;
  }
  getSelectStartBuildingId($event: any) {
    this.startBuildingId = $event;
  }
  getSelectEndBuildingId($event: any) {
    this.endBuildingId = $event;
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
