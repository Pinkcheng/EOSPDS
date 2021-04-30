import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';
import { ApiService } from 'src/app/service/api.service';
import { Building, Response } from '../../models'

@Component({
  selector: 'app-select-building',
  templateUrl: './select-building.component.html',
  styleUrls: ['./select-building.component.css']
})
export class SelectBuildingComponent implements OnInit {

  constructor(public api: ApiService) { }

  selectBuildingId: string = "";
  buildingList: Building[] = []

  @Output()
  selectBuildingEvent = new EventEmitter<any>();

  ngOnInit(): void {
    this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data; console.log(res.data) })

  }
  onSelectBuildingChange(selectBuildingId: string) {
    //http get departmentlist of building id
    this.selectBuildingId = selectBuildingId;
    this.selectBuildingEvent.emit(selectBuildingId)
  }
}

