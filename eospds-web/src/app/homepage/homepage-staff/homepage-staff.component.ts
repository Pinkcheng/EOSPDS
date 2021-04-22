import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.css']
})
export class HomepageStaffComponent implements OnInit{

  constructor() { }

  @Input()
  articleHeight!: number;
  ngOnInit(): void {
    //get staff data
    this.resetStaffListCheckbox();
  }
  staffList = [
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000002",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000003",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000004",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000005",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000007",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000008",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000009",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S000000010",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },

  ]

  allStaffCheckStatus: boolean = false; //全選checkbox狀態
  staffListCheckStatus: boolean[] = []; //staff list的checkbox狀態
  staffIdList: Array<any> = this.staffList.map(item => Object.values(item)[0]) //所有staff的id
  checkedStaffIdList: Array<string> = [] //已勾選的staff id

  //重設全選checkbox
  resetStaffListCheckbox() {
    this.allStaffCheckStatus = false;
    this.staffListCheckStatus = [];
    for (let i = 0; i < this.staffList.length; i++) {
      this.staffListCheckStatus[i] = false;
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
      this.staffIdList = this.staffList.map(item => Object.values(item)[0])
      for (let i = 0; i < this.staffIdList.length; i++) {
        if (this.staffListCheckStatus[i]) {
          this.checkedStaffIdList.push(this.staffIdList[i])
        }
      }
    }
    return this.checkedStaffIdList
  }

  printQRcode(){
    window.print();
  }
}
