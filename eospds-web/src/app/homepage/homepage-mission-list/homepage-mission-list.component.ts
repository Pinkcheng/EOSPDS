import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-mission-list',
  templateUrl: './homepage-mission-list.component.html',
  styleUrls: ['./homepage-mission-list.component.css']
})
export class HomepageMissionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log(this.mission_list)
  }

  @Input()
  mission_list: Array<any> = []
  getConsoleline($event: any) {
    //console.log($event.path[0].id.split("_")[1])
  };
}
