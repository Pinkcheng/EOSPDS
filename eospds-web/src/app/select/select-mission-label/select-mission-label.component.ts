import { ApiService } from 'src/app/service/api.service';
import { MissionType, MissionLabel } from 'src/app/models';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-select-mission-label',
  templateUrl: './select-mission-label.component.html',
  styleUrls: ['./select-mission-label.component.css']
})
export class SelectMissionLabelComponent implements OnInit, OnChanges {

  @Input()
  selectMissionTypeId: string = "";
  @Input()
  selectMissionLabelId: string = "";
  @Output()
  selectMissionLabelEvent = new EventEmitter<any>();

  missionTypeList: MissionType[] = []
  missionLabelList: MissionLabel[] = []


  constructor(public dialog: MatDialog, public api: ApiService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectMissionTypeId) {
      let param = new HttpParams().set('mission_type_id', this.selectMissionTypeId);
      this.api.getMissionLabelListParams(param).subscribe(res => this.missionLabelList = res.data)
    }
  }

  ngOnInit(): void {
    //http get mission type list
    this.api.getMissionTypeList().subscribe(res => this.missionTypeList = res.data)
  }
  onSelectMissionTypeChange(selectMissionTypeId: string) {
    let param = new HttpParams().set('mission_type_id', selectMissionTypeId);
    this.api.getMissionLabelListParams(param).subscribe(res => this.missionLabelList = res.data)
    this.selectMissionTypeId = selectMissionTypeId;
    //如果重選Type label為空
    this.selectMissionLabelId = "";
    this.selectMissionLabelEvent.emit(this.selectMissionLabelId)
  }
  onSelectMissionLabelChange(selectMissionLabelId: string) {
    this.selectMissionLabelId = selectMissionLabelId;
    this.selectMissionLabelEvent.emit(selectMissionLabelId)
  }
}
