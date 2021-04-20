import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalConstants } from '..//../common/global-constants';

@Component({
  selector: 'app-homepage-mission-list',
  templateUrl: './homepage-mission-list.component.html',
  styleUrls: ['./homepage-mission-list.component.css']
})
export class HomepageMissionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log(this.mission_list);
  }

  @Input()
  mission_list: Array<any> = [];
  @Output()
  mouseEnterEvent = new EventEmitter<any>();
  @Output()
  mouseLeaveEvent =new EventEmitter<any>();

  mouseEnterIndex: number = 0;
  mouseEnterMissionId: string = "";

  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    //console.log(this.mouseEnterIndex);
    this.mouseEnterMissionId = this.mission_list[this.mouseEnterIndex].id;
    this.mouseEnterEvent.emit([this.mouseEnterMissionId, false]);
  };
  getMouseLeave($event: any) {
    this.mouseLeaveEvent.emit(true);
  }

  isPorterCenter:boolean = GlobalConstants.isPorterCenter;
}
