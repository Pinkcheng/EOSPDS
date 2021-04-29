import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MissionType } from 'src/app/models';

@Component({
  selector: 'app-select-mission-type',
  templateUrl: './select-mission-type.component.html',
  styleUrls: ['./select-mission-type.component.css']
})
export class SelectMissionTypeComponent implements OnInit {


  missionTypeList: MissionType[] = [];

  @Input()
  selectMissionTypeId: string = "";

  @Output()
  selectMissionTypeEvent = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
    if (this.selectMissionTypeId != "") {
      //api get mission type list
      this.missionTypeList = this.missionTypeListData;
      this.onSelectMissionTypeChange(this.selectMissionTypeId)
    } else {
      this.missionTypeList = this.missionTypeListData;
    }
  }
  onSelectMissionTypeChange(selectMissionTypeId: string) {
    this.selectMissionTypeId = selectMissionTypeId;
    this.selectMissionTypeEvent.emit(selectMissionTypeId)
  }
  missionTypeListData = [
    {
      "id": "T0001",
      "name": "物品衛材",
      "transport": {
        "id": 2,
        "name": "運物"
      }
    },
    {
      "id": "T0002",
      "name": "轉床",
      "transport": {
        "id": 1,
        "name": "運人"
      }
    }
  ]
}
