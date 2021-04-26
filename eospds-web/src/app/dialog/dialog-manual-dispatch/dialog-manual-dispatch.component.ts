import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-manual-dispatch',
  templateUrl: './dialog-manual-dispatch.component.html',
  styleUrls: ['./dialog-manual-dispatch.component.css']
})
export class DialogManualDispatchComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    //get porter list with work status
  }
  manualDispatch() {

    if (this.data.checkMissionList.length != 0 && this.porterId != "") {
      //http auto dispatch
    }

  }
  porterId: string = "";
  porterList = [
    {
      "id": "P10000003",
      "name": "蔡明智",
      "type": 1,
      "status": 2,
      "mission": 0,
      "position": "新醫療大樓-5B病房",
      "time": "2021/03/30 10:20"
    }, {
      "id": "P10000002",
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
      "position": "新醫療大樓2F-開刀房",
      "time": "2021/03/30 10:20"
    }
  ];
}
