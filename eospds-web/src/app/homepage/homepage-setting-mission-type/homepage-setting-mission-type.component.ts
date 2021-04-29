import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogAddMissionTypeComponent } from 'src/app/dialog/dialog-add-mission-type/dialog-add-mission-type.component';
import { DialogUpdateMissionTypeComponent } from 'src/app/dialog/dialog-update-mission-type/dialog-update-mission-type.component';

@Component({
  selector: 'app-homepage-setting-mission-type',
  templateUrl: './homepage-setting-mission-type.component.html',
  styleUrls: ['./homepage-setting-mission-type.component.css']
})
export class HomepageSettingMissionTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  missionTypeList = [
    {
      "id": "M1001",
      "type": "轉床",
      "class": "運人",
      "name": "轉床(一般病房互轉)"

    },
    {
      "id": "M1002",
      "type": "回病房",
      "class": "運人",
      "name": "回病房(職能回)"

    },
    {
      "id": "M1003",
      "type": "回病房",
      "class": "運人",
      "name": "回病房(運動治療室回)"

    },
    {
      "id": "回急診",
      "type": "轉床",
      "class": "運人",
      "name": "帶病人去健康管理中心(HMC)或6診"

    },
    {
      "id": "M1005",
      "type": "一般檢查",
      "class": "運人",
      "name": "XR(一般)"

    },
    {
      "id": "M1006",
      "type": "設備",
      "class": "運物",
      "name": "流量表"

    },
    {
      "id": "M1007",
      "type": "物品衛材",
      "class": "運物",
      "name": "病房點滴"

    }
  ]
  mouseEnterIndex: number = 0;
  mouseEnterMissionTypeId: string = "";

  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterMissionTypeId = this.missionTypeList[this.mouseEnterIndex].id;
  };

  addMissionTypeDialog() {
    this.dialog.open(DialogAddMissionTypeComponent, {
      width: '500px',
      height: '350px',
    });
  }
  updateMissionTypeDialog() {
    this.dialog.open(DialogUpdateMissionTypeComponent, {
      width: '400px',
      height: '400px',
      data: {
        missionTypeId: this.mouseEnterMissionTypeId
      }
    });
  }

}
