import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-mission-type',
  templateUrl: './dialog-add-mission-type.component.html',
  styleUrls: ['./dialog-add-mission-type.component.css']
})
export class DialogAddMissionTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  class: string = '';
  classes: string[] = ['運人', '運物'];

  addMissionType() {
    //http post mission
  }
}
