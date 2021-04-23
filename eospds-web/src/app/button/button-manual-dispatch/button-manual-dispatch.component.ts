import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogManualDispatchComponent } from 'src/app/dialog/dialog-manual-dispatch/dialog-manual-dispatch.component';

@Component({
  selector: 'app-button-manual-dispatch',
  templateUrl: './button-manual-dispatch.component.html',
  styleUrls: ['./button-manual-dispatch.component.css']
})
export class ButtonManualDispatchComponent implements OnInit, OnChanges {

  constructor(public dialog: MatDialog) { }

  @Input()
  checkMissionList: string[] = [];
  @Input()
  missionId: string = "";
  ngOnInit(): void {
  }

  manualDispatchDiaolog() {
    this.dialog.open(DialogManualDispatchComponent, {
      width: '500px',
      height: '500px',
      data: {
        checkMissionList: this.checkMissionList,
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.checkMissionList) {
      this.checkMissionList = changes.checkMissionList.currentValue;
    }
    if (changes.missionId) {
      this.checkMissionList = [changes.missionId.currentValue];
    }
  }
}
