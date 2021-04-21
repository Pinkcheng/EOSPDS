import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-porter',
  templateUrl: './homepage-porter.component.html',
  styleUrls: ['./homepage-porter.component.css']
})
export class HomepagePorterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changePorterList(this.checkboxList);
  }

  @Input()
  articleHeight!: number;
  porterList = [
    {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    }, {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    }
  ];
  porterListChange = [
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    }, {
      "id": "P10000001",
      "name": "李冠億",
      "type": 1,
      "status": 1,
      "mission": 1,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    },
    {
      "id": "P10000001",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    }
  ];

  checkboxList: Array<number> = [1, 2];
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
      for (let i = 0; i < this.checkboxList.length; i++) {
        if (value.status == this.checkboxList[i]) {
          this.porterListFilter.push(value)
        }
      }
    });
  }

  //手動更新傳送員列表
  updatePorterList() {
    //get mission list
    this.porterList = this.porterListChange;
    this.changePorterList(this.checkboxList);
  }
}
