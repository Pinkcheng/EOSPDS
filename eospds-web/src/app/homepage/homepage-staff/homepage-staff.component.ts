import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddStaffComponent } from 'src/app/dialog/dialog-add-staff/dialog-add-staff.component';
import { DialogUpdateStaffComponent } from 'src/app/dialog/dialog-update-staff/dialog-update-staff.component';
import { ErrorService } from 'src/app/service/error.service';
import { Staff } from 'src/app/models/staff';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.css']
})
export class HomepageStaffComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public user: UserService,
    public api: ApiService,
    public err: ErrorService) { }

  userId: string | null = "";

  @Input()
  articleHeight!: number;

  staffList: Staff[] = []
  ngOnInit(): void {
    //get staff data
    this.getStaffList()
    /*this.dialog.afterAllClosed.subscribe(() => {//刪除或關閉list會更新list
      this.getStaffList();
    });*/
  }

  allStaffCheckStatus: boolean = false; //全選checkbox狀態
  staffListCheckStatus: boolean[] = []; //staff list的checkbox狀態
  staffIdList: Array<any> = [] //所有staff的id
  checkedStaffIdList: Array<string> = [] //已勾選的staff id

  //重設全選checkbox
  resetStaffListCheckbox() {
    this.allStaffCheckStatus = false;
    this.staffListCheckStatus = [];
    this.staffIdList = this.staffList.map(staff => staff.id)
    for (let i = 0; i < this.staffList.length; i++) {
      this.staffListCheckStatus[i] = false;
    }
  }

  getStaffList() {
    //get staff list
    this.userId = this.user.getUserId();
    if (this.userId != null) {
      let params = new HttpParams().set('department', this.userId);
      this.api.getStaffListParams(params).subscribe(res => {
        this.staffList = res.data;
        this.resetStaffListCheckbox();
      })
    }

  }
  //全選或取消全選list的checkbox
  setAllCheckboxStatus($event: boolean) {
    this.allStaffCheckStatus = $event;
    if (this.staffList == null) {
      return;
    }
    this.staffListCheckStatus = this.staffListCheckStatus.map(t => $event);
  }

  //更新全選checkbox狀態
  updateAllCheckboxStatus() {
    this.allStaffCheckStatus = this.staffList != null && this.staffListCheckStatus.every(t => t);
  }

  //取得已勾選的staff id List
  getCheckStaffList(): Array<string> {
    this.checkedStaffIdList = [];
    if (this.staffListCheckStatus != null && this.staffList != null) {
      //this.staffIdList = this.staffList.map(item => Object.values(item)[0])
      for (let i = 0; i < this.staffIdList.length; i++) {
        if (this.staffListCheckStatus[i]) {
          this.checkedStaffIdList.push(this.staffIdList[i])
        }
      }
    }
    return this.checkedStaffIdList
  }

  printQRcode() {
    console.log(this.getCheckStaffList())
    //window.print();
  }

  mouseEnterIndex: number = 0;
  mouseEnterStaffId: string = "";
  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterStaffId = this.staffList[this.mouseEnterIndex].id;
  };
  updateStaffDialog() {
    this.dialog.open(DialogUpdateStaffComponent, {
      width: '550px',
      height: '400px',
      data: {
        staffId: this.mouseEnterStaffId
      }
    });
  }
  addStaffDialog() {
    this.dialog.open(DialogAddStaffComponent, {
      width: '400px',
      height: '350px',
    });
  }
  clickInnerCheckbox($event: any) {
    $event.stopPropagation();
  }
}
