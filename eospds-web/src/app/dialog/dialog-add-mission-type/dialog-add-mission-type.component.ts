import { ApiService } from 'src/app/service/api.service';
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
    public dialog: MatDialog,
    public api: ApiService) { }

  ngOnInit(): void {
  }
  missionTypeId: string = "";
  missionLabelName: string = "";
  addMissionType() {
    if (this.missionTypeId != "" && this.missionLabelName != "") {
      let body = new URLSearchParams();
      body.set('name', this.missionLabelName)
      body.set('missionTypeID', this.missionTypeId)
      this.api.addMissionLabel(body).subscribe(res => this.err.handleResponse(res))
      this.dialog.closeAll();
    } else {
      this.err.errorDataUnComplete();
    }
  }
  getSelectMissionTypeId($event: any) {
    this.missionTypeId = $event;
    console.log(this.missionTypeId)
  }
}
