import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPorterComponent } from 'src/app/dialog/dialog-add-porter/dialog-add-porter.component';
import { DialogUpdatePorterComponent } from 'src/app/dialog/dialog-update-porter/dialog-update-porter.component';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';

@Component({
  selector: 'app-homepage-porter',
  templateUrl: './homepage-porter.component.html',
  styleUrls: ['./homepage-porter.component.css']
})
export class HomepagePorterComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public api: ApiService) { }

  ngOnInit(): void {

    /*this.dialog.afterAllClosed.subscribe(() => {//初始+關閉dialog會更新list
      this.updatePorterList();
    });*/
    this.getPorterList();

  }

  @Input()
  articleHeight!: number;
  checkboxList: Array<number> = [1, 2];
  porterList: Array<any> = []
  porterListFilter: Array<any> = []


  //取得Checkbox狀態並更新傳送員列表
  getCheckboxList($event: any) {
    this.checkboxList = $event;
    this.changePorterList($event);
  }

  //根據Checkbox狀態更新傳送員列表
  changePorterList(checkboxList: Array<number>) {
    this.porterListFilter = []
    this.porterList.forEach((value: any, index) => {
      for (let i = 0; i < checkboxList.length; i++) {
        if (value.status == checkboxList[i]) {
          this.porterListFilter.push(value)
        }
      }
    });
    this.resetPorterListCheckbox();
  }

  //手動更新傳送員列表
  getPorterList() {
    //get porter list
    this.api.getPorterList().subscribe((res: Response) => {
      this.porterList = res.data;
      this.getCheckboxList(this.checkboxList);
    })
  }

  allPorterCheckStatus: boolean = false; //全選checkbox狀態
  porterListCheckStatus: boolean[] = []; //porter list的checkbox狀態
  porterIdList: Array<string> = [] //所有porter的id 初始宣告+更換列表 須重設
  checkedPorterIdList: Array<string> = [] //已勾選的porter id

  //重設全選checkbox
  resetPorterListCheckbox() {
    this.allPorterCheckStatus = false;
    this.porterListCheckStatus = [];
    this.porterIdList = this.porterListFilter.map(porter => porter.id)
    for (let i = 0; i < this.porterListFilter.length; i++) {
      this.porterListCheckStatus[i] = false;
    }
  }

  //全選或取消全選list的checkbox
  setAllCheckboxStatus($event: boolean) {
    this.allPorterCheckStatus = $event;
    if (this.porterListFilter == null) {
      return;
    }
    this.porterListCheckStatus = this.porterListCheckStatus.map(t => $event);
  }


  //更新全選checkbox狀態
  updateAllCheckboxStatus() {
    this.allPorterCheckStatus = this.porterListFilter != null && this.porterListCheckStatus.every(t => t);
  }

  //取得已勾選的porter id List
  getCheckPorterList(): Array<string> {
    this.checkedPorterIdList = [];
    if (this.porterListCheckStatus != null && this.porterListFilter != null) {
      for (let i = 0; i < this.porterIdList.length; i++) {
        if (this.porterListCheckStatus[i]) {
          this.checkedPorterIdList.push(this.porterIdList[i])
        }
      }
    }
    return this.checkedPorterIdList
  }
  //取得游標目前PorterId
  mouseEnterIndex: number = 0;
  mouseEnterPorterId: string = "";
  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterPorterId = this.porterListFilter[this.mouseEnterIndex].id;
  };

  updatePorterDialog() {
    this.dialog.open(DialogUpdatePorterComponent, {
      width: '500px',
      height: '580px',
      data: {
        porterId: this.mouseEnterPorterId
      }
    });
  }
  addPorterDialog() {
    this.dialog.open(DialogAddPorterComponent, {
      width: '600px',
      height: '650px',
    });
  }
  clickInnerCheckbox($event: any) {
    $event.stopPropagation();
  }
}
