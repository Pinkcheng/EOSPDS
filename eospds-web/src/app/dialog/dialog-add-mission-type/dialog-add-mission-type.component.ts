import { ErrorService } from './../../service/error.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-mission-type',
  templateUrl: './dialog-add-mission-type.component.html',
  styleUrls: ['./dialog-add-mission-type.component.css']
})
export class DialogAddMissionTypeComponent implements OnInit {

  constructor(public err: ErrorService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  missionTypeId: string = "";
  missionLabelName: string = "";
  addMissionType() {
    if (this.missionTypeId != "" && this.missionLabelName != "") {
      let body = new URLSearchParams();
      body.set('id', this.missionTypeId)
      body.set('name', this.missionLabelName)
      //http post add mission label
      this.dialog.closeAll();
    } else {
      this.err.errorDataUnComplete();
    }


  }
  getSelectMissionId($event: any) {
    this.missionTypeId = $event;
    console.log(this.missionTypeId)
  }
}
