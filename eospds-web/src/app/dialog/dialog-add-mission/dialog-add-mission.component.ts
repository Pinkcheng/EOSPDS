import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-mission',
  templateUrl: './dialog-add-mission.component.html',
  styleUrls: ['./dialog-add-mission.component.css']
})
export class DialogAddMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tool: string = '無';
  tools: string[] = ['無', '大床', '小床', '升降小床','輪椅'];

  addMission(){
    //http post mission
  }
}
