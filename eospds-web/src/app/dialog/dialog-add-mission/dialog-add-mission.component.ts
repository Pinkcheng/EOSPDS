import { UserService } from 'src/app/service/user.service';
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
    public user: UserService,
    public api: ApiService
  ) { }
  userId!: string | null;
  missionInstrumentList: MissionInstrument[] = [];
  selectMissionLabelId: string = "";
  selectStartDepartmentId: string = "";
  selectEndDepartmentId: string = "";
  selectMissionInstrumentId: string = "";
  missionContent: string = "";
  ngOnInit(): void {
    //http get mission instrument
    this.userId = this.user.getUserId();
    this.api.getMissionInstrumentList().subscribe(res => this.missionInstrumentList = res.data)
  }

  addMission() {
    //http post add  mission
    let body = new URLSearchParams();
    if (this.selectStartDepartmentId != "") {
      body.set('label', this.selectMissionLabelId);
      if (this.selectMissionLabelId != "") {
        body.set('instrument', this.selectMissionInstrumentId);
        if (this.selectStartDepartmentId != "" && this.selectEndDepartmentId != "") {
          if (this.checkUserDepartment()) {
            body.set('start', this.selectStartDepartmentId);
            body.set('end', this.selectEndDepartmentId);
            if (this.missionContent != "") {
              body.set('content', this.missionContent);
            }
            this.api.addMission(body).subscribe(res => {
              this.err.handleResponse(res);
              this.dialog.closeAll();
            })
          } else {
            this.err.errorTextResponse("起始或送往單位需有一項為您的單位")
          }
        } else {
          this.err.errorDataUnComplete()
        }
      } else {
        this.err.errorDataUnComplete()
      }
    } else {
      this.err.errorDataUnComplete()
    }
  }
  //檢查起始或送往單位是否有一項為自己的單位
  checkUserDepartment(): boolean {
    if (this.selectStartDepartmentId == this.userId || this.selectEndDepartmentId == this.userId || this.userId == '-1' || this.userId == '-2') {
      return true
    } else {
      return false
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
