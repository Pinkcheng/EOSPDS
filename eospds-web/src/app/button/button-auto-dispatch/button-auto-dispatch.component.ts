import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAutoDispatchComponent } from 'src/app/dialog/dialog-auto-dispatch/dialog-auto-dispatch.component';

@Component({
  selector: 'app-button-auto-dispatch',
  templateUrl: './button-auto-dispatch.component.html',
  styleUrls: ['./button-auto-dispatch.component.css']
})
export class ButtonAutoDispatchComponent implements OnInit, OnChanges {

  constructor(public dialog: MatDialog) {

  }
  @Input()
  checkMissionList: string[] = [];
  @Input()
  missionId: string = "";
  ngOnInit(): void {

  }
  autoDispatchDiaolog() {
    if (this.checkMissionList != []) {
      this.dialog.open(DialogAutoDispatchComponent, {
        width: '300px',
        height: '200px',
        data: {
          checkMissionList: this.checkMissionList,
        }
      });
      console.log(1, this.missionId)
      console.log(1, this.checkMissionList)
      this.checkMissionList = []

    };
    if (this.missionId != "") {
      this.checkMissionList.push(this.missionId)
      this.dialog.open(DialogAutoDispatchComponent, {
        width: '300px',
        height: '200px',
        data: {
          checkMissionList: this.checkMissionList,
        }
      });
      console.log(2, this.missionId)
      console.log(2, this.checkMissionList)
      this.missionId = "";

    }


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.checkMissionList) {
      this.checkMissionList = Object.assign({}, changes.checkMissionList.currentValue)
    }
  }
}
