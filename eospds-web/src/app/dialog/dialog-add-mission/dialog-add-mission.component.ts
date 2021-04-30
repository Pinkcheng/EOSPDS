import { ErrorService } from './../../service/error.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dialog-add-mission',
  templateUrl: './dialog-add-mission.component.html',
  styleUrls: ['./dialog-add-mission.component.css']
})
export class DialogAddMissionComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public err: ErrorService,
    public api: ApiService
  ) { }
  selectMissionLabelId: string = "";
  selectStartDepartmentId: string = "";
  selectEndDepartmentId: string = "";
  selectMissionInstrumentId: string = "";
  missionContent: string = "";
  ngOnInit(): void {
    //http get mission instrument
  }


  addMission() {
    //http post add  mission
    if (this.selectMissionLabelId != "" && this.selectStartDepartmentId != ""
      && this.selectEndDepartmentId != "" && this.selectMissionInstrumentId != "") {
      let body = new URLSearchParams();
      body.set('label', this.selectMissionLabelId);
      body.set('startDepartment', this.selectStartDepartmentId);
      body.set('endDepartment', this.selectEndDepartmentId);
      body.set('instrument', this.selectMissionInstrumentId);
      body.set('content', this.missionContent);
      console.log(this.selectMissionLabelId, this.selectStartDepartmentId, this.selectEndDepartmentId, this.selectMissionInstrumentId, this.missionContent)
      this.dialog.closeAll()
    } else {
      this.err.errorDataUnComplete();
    }
  }

  getSelectMissionLabelId($event: any) {
    this.selectMissionLabelId = $event;
  }
  getSelectStartDepartmentId($event: any) {
    this.selectStartDepartmentId = $event;
  }
  getSelectEndDepartmentId($event: any) {
    this.selectEndDepartmentId = $event;
  }
  missionInstrumentList = [
    {
      "id": "I0000",
      "name": "無"
    },
    {
      "id": "I0001",
      "name": "輪椅"
    },
    {
      "id": "I0002",
      "name": "大床"
    },
    {
      "id": "I0003",
      "name": "小床"
    },
    {
      "id": "I0004",
      "name": "升降小床"
    }
  ]
}
