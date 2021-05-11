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
  missionData: MissionData = {
    "id": "",
    "content": "",
    "status": 0,
    "createTime": "",
    "label": {
      "id": "",
      "name": ""
    },
    "instrument": {
      "id": "",
      "name": ""
    },
    "startDepartment": {
      "id": "",
      "name": "",
      "floor": "",
      "building": {
        "id": "",
        "name": ""
      }
    },
    "endDepartment": {
      "id": "",
      "name": "",
      "floor": "",
      "building": {
        "id": "",
        "name": ""
      }
    },
    "porter": {
      "id": "",
      "name": "",
      "tagNumber": "",
      "birthday": null,
      "gender": 0,
      "status": 0
    },
    "process": [
      {
        "status": "add",
        "time": null,
        "department": null
      },
      {
        "status": "start",
        "time": null,
        "department": null
      },
      {
        "status": "in_progress",
        "time": null,
        "department": null
      },
      {
        "status": "finish",
        "time": null,
        "department": null
      }
    ]
  };
  missionInstrumentList: MissionInstrument[] = [];
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public err: ErrorService, public api: ApiService) {
    //console.log(data.missionId)//欲修改之missionid
    this.api.getMissionData(data.missionId).subscribe(res => {
      this.missionData = res.data;
      console.log(this.missionData)
    })
    this.api.getMissionInstrumentList().subscribe(res => this.missionInstrumentList = res.data)
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
    if (this.missionData.label.id != "" && this.missionData.instrument.id != "" &&
      this.missionData.startDepartment.id != "" && this.missionData.endDepartment.id != "") {
      console.log(this.missionData.label, this.missionData.instrument.id,
        this.missionData.startDepartment.id, this.missionData.endDepartment.id)
    } else {
      this.err.errorDataUnComplete();
    }
  }

  getSelectMIssionLabelId($event: any) {
    this.missionData.label.id = $event;
  }
  getSelectStartDepartmentId($event: any) {
    this.missionData.startDepartment.id = $event;
  }
  getSelectEndDepartmentId($event: any) {
    this.missionData.endDepartment.id = $event;
  }
  getSelectStartBuildingId($event: any) {
    this.missionData.startDepartment.building.id = $event;
  }
  getSelectEndBuildingId($event: any) {
    this.missionData.endDepartment.building.id = $event;
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
