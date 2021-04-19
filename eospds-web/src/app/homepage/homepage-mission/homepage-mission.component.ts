import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage-mission',
  templateUrl: './homepage-mission.component.html',
  styleUrls: ['./homepage-mission.component.css']
})
export class HomepageMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mission_list_filter = this.mission_list
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
  };


  task: Task = {
    name: '全部任務',
    completed: true,
    subtasks: [
      { id: 1, name: '未派遣', completed: true },
      { id: 2, name: '未開始', completed: true },
      { id: 3, name: '進行中', completed: true },
      { id: 4, name: '已完成', completed: true }
    ]
  };

  allComplete: boolean = false;
  selectedItemsList: any = []
  checkedIDs: Array<Object> = []
  mission_list_filter: Array<any> = []
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.selectedItemsList = this.task.subtasks?.filter((value, index) => {
      return value.completed
    }).map(item => Object.values(item)[0]);

    this.checkedIDs = [];
    this.mission_list.forEach((value, index) => {
      for (let i = 0; i < this.selectedItemsList.length; i++) {
        if (this.selectedItemsList[i] == 0) {
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
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }

    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.mission_list_filter = this.mission_list
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}

export interface Task {
  id?: number;
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
