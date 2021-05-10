import { logging } from 'protractor';
import { ApiService } from 'src/app/service/api.service';
import { missionProcess } from './../../models/missionProcess';
import { MissionData } from './../../models/MissionData';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-homepage-mission-data',
  templateUrl: './homepage-mission-data.component.html',
  styleUrls: ['./homepage-mission-data.component.css']
})
export class HomepageMissionDataComponent implements OnInit, OnChanges {
  constructor(public api: ApiService) { }

  @Input()
  mouseEnterMissionId: string = '';
  missionData!: MissionData;
  missionProcess!: missionProcess[];
  ngOnInit(): void {
    this.api.getMissionData(this.mouseEnterMissionId).subscribe(res => {
      this.missionData = res.data;
      console.log(this.missionData.label.name)
      this.missionProcess = this.missionData.process;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.missionData) {
      this.missionData = Object.assign({}, changes.missionData.currentValue)
      this.missionProcess = this.missionData.process;
    }
  }
}
