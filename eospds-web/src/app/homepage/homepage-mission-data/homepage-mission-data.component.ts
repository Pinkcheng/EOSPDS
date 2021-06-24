import { Department } from './../../models/department';
import { logging } from 'protractor';
import { ApiService } from 'src/app/service/api.service';
import { missionProcess } from './../../models/missionProcess';
import { MissionData } from './../../models/missionData';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Staff } from 'src/app/models';

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
  missionProcess!: missionProcess;
  addTime: Date | string = "";
  addHandOver: string = "";
  startTime: Date | string = "";
  startHandOver: string = "";
  processTime: Date | string = "";
  processHandOver: string = "";
  finishTime: Date | string = "";
  finishHandOver: string = "";
  ngOnInit(): void {
    this.api.getMissionData(this.mouseEnterMissionId).subscribe(res => {
      this.missionData = res.data;
      this.missionProcess = res.data.process;
      this.changeData()
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.missionData) {
      this.missionData = Object.assign({}, changes.missionData.currentValue)
      this.missionProcess = this.missionData.process;
      this.changeData();
    }
  }
  changeData() {
    if (this.missionProcess.add.time != null) {
      this.addTime = this.missionProcess.add.time;
      if (this.missionProcess.add.handover != null) {
        if (this.missionProcess.add.handover.id.startsWith('D')) {
          this.addHandOver = this.missionProcess.add.handover.building.name + '-' + this.missionProcess.add.handover.floor + '-' + this.missionProcess.add.handover.name
        } else {
          console.log("Staff")
        }
      } else {
        this.addHandOver = '';
      }
    } else {
      this.addTime = '';
    }
    if (this.missionProcess.start.time != null) {
      this.startTime = this.missionProcess.start.time;
      if (this.missionProcess.start.handover != null) {
        let id: string = this.missionProcess.start.handover.id;
        if (id.startsWith('D')) {
          this.startHandOver = this.missionProcess.start.handover.building.name + '-' + this.missionProcess.start.handover.floor + '-' + this.missionProcess.start.handover.name
        } else {
          console.log("Staff")
        }
      } else {
        this.startHandOver = '';
      }
    } else {
      this.startTime = '';
    }
    if (this.missionProcess.in_process.time != null) {
      this.processTime = this.missionProcess.in_process.time;
      if (this.missionProcess.in_process.handover != null) {
        if (this.missionProcess.in_process.handover.id.startsWith('D')) {
          this.processHandOver = this.missionProcess.in_process.handover.building.name + '-' + this.missionProcess.in_process.handover.floor + '-' + this.missionProcess.in_process.handover.name
        } else {
          console.log("Staff")
        }
      } else {
        this.processHandOver = '';
      }
    } else {
      this.processTime = '';
    }
    if (this.missionProcess.finish.time != null) {
      this.finishTime = this.missionProcess.finish.time;
      if (this.missionProcess.finish.handover != null) {
        if (this.missionProcess.finish.handover.id.startsWith('D')) {
          this.finishHandOver = this.missionProcess.finish.handover.building.name + '-' + this.missionProcess.finish.handover.floor + '-' + this.missionProcess.finish.handover.name
        } else {
          console.log("Staff")
        }
      } else {
        this.finishHandOver = '';
      }
    } else {
      this.finishTime = '';
    }
  }
}
