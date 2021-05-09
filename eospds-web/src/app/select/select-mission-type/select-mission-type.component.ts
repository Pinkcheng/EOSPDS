import { ApiService } from 'src/app/service/api.service';
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

  constructor(public api: ApiService) { }
  ngOnInit(): void {
    this.api.getMissionTypeList().subscribe(res => this.missionTypeList = res.data)
    if (this.selectMissionTypeId != "") {
      this.onSelectMissionTypeChange(this.selectMissionTypeId)
    }
  }
  onSelectMissionTypeChange(selectMissionTypeId: string) {
    this.selectMissionTypeId = selectMissionTypeId;
    this.selectMissionTypeEvent.emit(selectMissionTypeId)
  }
}
