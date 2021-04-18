import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage-mission',
  templateUrl: './homepage-mission.component.html',
  styleUrls: ['./homepage-mission.component.css']
})
export class HomepageMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  @Input()
  articleHeight!: number;

  mission_list = [
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    },
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    },
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    }
    ,
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    }
    ,
    {
      "id": "M100100000000202103310002",
      "type": "X光",
      "status": 3,
      "add_time": "2021/03/31 04:19",
      "start": "新醫療大樓6F-6A病房",
      "end": "新醫療大樓B1-X光攝影室",
      "porter": "張宸愷"
    },
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 4,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    }

  ];
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

  getConsoleline($event: any) {
    //console.log($event.path[0].id.split("_")[1])
    //console.log(this.mission_list.filter(item => item.status == 3))
  };
  checkboxesDataList = [
    {
      id: 0,
      label: '全部任務',
      isChecked: false
    },
    {
      id: 1,
      label: '未派遣',
      isChecked: false
    },
    {
      id: 2,
      label: '未開始',
      isChecked: false
    },
    {
      id: 3,
      label: '進行中',
      isChecked: true
    },
    {
      id: 4,
      label: '已完成',
      isChecked: false
    }
  ]
  selectedItemsList: any = []
  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    }).map(item => Object.values(item)[0]);
    console.log(this.selectedItemsList)
  }
  checkedIDs: any = []
  mission_list_filter: any = []
  fetchCheckedIDs() {
    this.checkedIDs = [];
    this.mission_list.forEach((value, index) => {
      for (let i = 0; i < this.selectedItemsList.length; i++) {
        console.log(value.status + ' ' + this.selectedItemsList[i])
        if(this.selectedItemsList[i] == 0){
          this.mission_list_filter = this.mission_list
          break;
        }
        else if (value.status == this.selectedItemsList[i]) {
          this.checkedIDs.push(value)
        }
      }
    });
    console.log(this.checkedIDs)
    this.mission_list_filter = this.checkedIDs
  }
  changeSelection() {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }
}
