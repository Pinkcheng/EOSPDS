import { UserService } from './../../service/user.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogUpdateMissionComponent } from 'src/app/dialog/dialog-update-mission/dialog-update-mission.component';

@Component({
  selector: 'app-homepage-mission-list',
  templateUrl: './homepage-mission-list.component.html',
  styleUrls: ['./homepage-mission-list.component.css']
})
export class HomepageMissionListComponent implements OnInit, OnInit {

  constructor(public dialog: MatDialog,
    public user: UserService) { }

  ngOnInit(): void {
    this.isAdminLogin$ = this.user.getAdminLogin();
    this.resetMissionListCheckbox();
  }

  @Input()
  missionList: Array<any> = [];
  @Output()
  mouseEnterEvent = new EventEmitter<any>();
  @Output()
  mouseLeaveEvent = new EventEmitter<any>();
  @Output()
  checkMissionIDListEvent = new EventEmitter<any>();

  mouseEnterIndex: number = 0;
  mouseEnterMissionId: string = "";
  isAdminLogin$ = new Observable<boolean>();

  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterMissionId = this.missionList[this.mouseEnterIndex].id;
    this.mouseEnterEvent.emit([this.mouseEnterMissionId, false]);
  };
  getMouseLeave($event: any) {
    this.mouseLeaveEvent.emit(true);
  }

  allMissionCheckStatus: boolean = false;
  missionListCheckStatus: boolean[] = []; //mission list的checkbox狀態


  //重設全選checkbox
  resetMissionListCheckbox() {
    this.allMissionCheckStatus = false;
    this.missionListCheckStatus = [];
    for (let i = 0; i < this.missionList.length; i++) {
      this.missionListCheckStatus[i] = false;
    }
  }
  //全選或取消全選list的checkbox
  setAllCheckboxStatus($event: boolean) {
    this.allMissionCheckStatus = $event;
    if (this.missionList == null) {
      return;
    }
    this.missionListCheckStatus = this.missionListCheckStatus.map(t => $event);
  }
  //更新全選checkbox狀態
  updateAllCheckboxStatus() {
    this.allMissionCheckStatus = this.missionList != null && this.missionListCheckStatus.every(t => t);
  }

  //取得已勾選的mission id List
  getCheckMissionIdList(): Array<string> {
    let checkedMissionIdList: Array<string> = [];
    let missionIdList: Array<any> = this.missionList.map(item => Object.values(item)[0]);
    if (this.missionListCheckStatus != null && this.missionList != null) {
      for (let i = 0; i < this.missionList.length; i++) {
        if (this.missionListCheckStatus[i]) {
          checkedMissionIdList.push(missionIdList[i]);
        }
      }
    }
    this.checkMissionIDListEvent.emit(checkedMissionIdList);
    return checkedMissionIdList
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.missionData) {
      this.missionList = Object.assign({}, changes.missionData.currentValue)
    }
    this.resetMissionListCheckbox();
  }

  UpdateMissionDialog() {
    this.dialog.open(DialogUpdateMissionComponent, {
      width: '500px',
      height: '800px',
      data: {
        missionId: this.mouseEnterMissionId
      }
    });
  }
  clickInnerCheckbox($event: any) {
    $event.stopPropagation();
  }
}
