import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage-mission',
  templateUrl: './homepage-mission.component.html',
  styleUrls: ['./homepage-mission.component.css']
})
export class HomepageMissionComponent implements OnInit {



  @Input()
  articleHeight: number = 0;

  missionListFilter: Array<any> = [];
  checkboxList: Array<number> = [1, 2, 3, 4];
  missionData: Object = {};

  constructor() { }

  ngOnInit(): void {
    //get mission list
    this.changeMissionList(this.checkboxList);
    this.missionData = this.mission_1_data;
  }

  mission_list = [
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 1,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": " ",
      "position": " "
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 2,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    }
    ,
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    }
    ,
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    }

  ];
  mission_list_change = [
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 1,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": " ",
      "position": " "
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成",
      "position": "新醫療大樓1F-40診"
    },
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷",
      "position": "新醫療大樓1F-40診"
    }
  ]
  mission_1_data = {
    "id": "M100100000000202103310001",
    "content": "5055-1 李冠億",
    "type": "檢體",
    "add_time": "2021/03/31 02:31",
    "dispatch_time": "2021/03/31 02:31",
    "start_time": "2021/03/31 02:31",
    "finish_time": "2021/03/31 02:31",
    "dispatch": "自動派遣",
    "add_department": "新醫療大樓5F-5B病房",
    "start_department": "新醫療大樓5F-5B病房",
    "end_department": "舊醫療大樓1F-檢驗醫學部",
    "porter": "沈泓成",
    "staff": "陳怡均",
  };
  mission_2_data = {
    "id": "M100100000000202103310002",
    "content": "6011 謝旻靜 ",
    "type": "X光",
    "add_time": "2021/03/31 04:19",
    "dispatch_time": "2021/03/31 04:31",
    "start_time": "2021/03/31 05:00",
    "finish_time": "2021/03/31 05:15",
    "dispatch": "自動派遣",
    "add_department": "新醫療大樓6F-6A病房",
    "start_department": "新醫療大樓6F-6A病房",
    "end_department": "新醫療大樓B1-X光攝影室",
    "porter": "張宸愷",
    "staff": "林彥儒",
  };

  //手動更新任務列表
  updateMissionList() {
    //get mission list
    this.mission_list = this.mission_list_change;
    this.changeMissionList(this.checkboxList);
  }

  //取得checkbox狀態
  getCheckboxList($event: any) {
    this.checkboxList = $event;
    this.changeMissionList($event);
  }

  //根據checkbox狀態過濾並產生任務列表
  changeMissionList(checkboxList: Array<number>) {
    this.missionListFilter = []
    this.mission_list.forEach((value: any, index) => {
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
    //get mission data
    if ($event[0].charAt($event[0].length - 1) == "1") {
      this.missionData = this.mission_1_data;
    } else {
      this.missionData = this.mission_2_data;
    }
    this.isMouseLeave = $event[1];
  }

  mouseIsLeave($event: boolean) {
    this.isMouseLeave = $event;
  }
}


