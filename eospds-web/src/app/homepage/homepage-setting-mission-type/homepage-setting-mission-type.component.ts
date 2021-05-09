import { MissionLabel } from 'src/app/models';
import { ApiService } from 'src/app/service/api.service';
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

  missionLabelList: MissionLabel[] = []
  constructor(public dialog: MatDialog, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getMissionLabelList().subscribe(res => this.missionLabelList = res.data)
  }

  mouseEnterIndex: number = 0;
  mouseEnterMissionTypeId: string = "";

  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterMissionTypeId = this.missionLabelList[this.mouseEnterIndex].id;
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
  getMissionLabelList() {
    this.api.getMissionLabelList().subscribe(res => this.missionLabelList = res.data)
  }

}
