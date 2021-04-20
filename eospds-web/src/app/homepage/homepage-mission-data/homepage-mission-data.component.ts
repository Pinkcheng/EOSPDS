import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-homepage-mission-data',
  templateUrl: './homepage-mission-data.component.html',
  styleUrls: ['./homepage-mission-data.component.css']
})
export class HomepageMissionDataComponent implements OnInit, OnChanges{

  constructor() { }

  @Input()
  missionData: any = {};
  ngOnInit(): void {
    console.log(this.missionData)
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.missionData){
      this.missionData = Object.assign({},changes.missionData.currentValue)
    }
  }
}
