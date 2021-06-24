import { HttpParams } from '@angular/common/http';
import { MissionData } from './../../models/missionData';
import { MissionList } from './../../models/missionList';
import { ApiService } from 'src/app/service/api.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddMissionComponent } from 'src/app/dialog/dialog-add-mission/dialog-add-mission.component';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-homepage-mission',
  templateUrl: './homepage-mission.component.html',
  styleUrls: ['./homepage-mission.component.css']
})
export class HomepageMissionComponent implements OnInit {



  @Input()
  articleHeight: number = 0;

  missionList: Array<MissionList> = [];
  missionListFilter: Array<MissionList> = [];

  checkboxList: Array<number> = [1, 2, 3, 4];

  isAdminLogin$ = new Observable<boolean>();
  isAdminLogin: boolean = false;
  userId: string | null = '';
  mouseEnterMissionId: string = '';
  missionData!: MissionData;

  constructor(public dialog: MatDialog,
    public user: UserService,
    public api: ApiService) {
  }


  ngOnInit(): void {
    this.isAdminLogin$ = this.user.getAdminLogin();
    this.getMissionList();
    setInterval(()=>{
      this.updateMissionList();
    }, 5000)
  }


  getMissionList() {
    //get mission list
    this.isAdminLogin$.subscribe(value => this.isAdminLogin = value)
    if (this.isAdminLogin) {
      this.api.getMissionList().subscribe(res => {
        this.missionList = res.data;
        this.changeMissionList(this.checkboxList);
      })
    } else {
      this.userId = this.user.getUserId()
      if (this.userId != null) {
        let params = new HttpParams().set('department', this.userId)
        this.api.getMissionListParams(params).subscribe(res => {
          this.missionList = res.data;
          console.log(res.data)
          this.changeMissionList(this.checkboxList);
        })
      }
    }
  }
  //手動更新任務列表
  updateMissionList() {
    this.getMissionList()
    this.checkMissionList = [];
  }

  //取得checkbox狀態
  getCheckboxList($event: any) {
    this.checkboxList = $event;
    this.changeMissionList($event);
  }

  //根據checkbox狀態過濾並產生任務列表
  changeMissionList(checkboxList: Array<number>) {
    this.missionListFilter = []
    this.missionList.forEach((value: MissionList, index) => {
      if (checkboxList.length != 0) {
        for (let i = 0; i < this.checkboxList.length; i++) {
          if (value.status == this.checkboxList[i]) {
            this.missionListFilter.push(value)
          }
        }
      }
    });
  }

  isMouseLeave: boolean = true;
  //取得任務資料
  getMissionData($event: Array<any>) {
    this.mouseEnterMissionId = $event[0];
    this.isMouseLeave = $event[1];
  }

  mouseIsLeave($event: boolean) {
    this.isMouseLeave = $event;
  }
  //取得已勾選之任務id
  checkMissionList: string[] = [];
  getCheckMissionList($event: string[]) {
    this.checkMissionList = $event;
  }

  addMissionDialog() {
    this.dialog.open(DialogAddMissionComponent, {
      width: '700px',
      height: '800px',
    });
  }
}


