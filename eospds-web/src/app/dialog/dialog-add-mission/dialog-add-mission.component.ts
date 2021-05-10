import { MissionInstrument } from './../../models/missionInstrument';
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
  missionInstrumentList: MissionInstrument[] = [];
  selectMissionLabelId: string = "";
  selectStartDepartmentId: string = "";
  selectEndDepartmentId: string = "";
  selectMissionInstrumentId: string = "";
  missionContent: string = "";
  ngOnInit(): void {
    //http get mission instrument
    this.api.getMissionInstrumentList().subscribe(res => this.missionInstrumentList = res.data)
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
      this.api.addMission(body).subscribe(res =>this.err.handleResponse(res))
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
}
