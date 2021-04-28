import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models'

@Component({
  selector: 'app-select-building',
  templateUrl: './select-building.component.html',
  styleUrls: ['./select-building.component.css']
})
export class SelectBuildingComponent implements OnInit {

  constructor(public api: ApiService) { }
  buildingList: Building[] = []
  ngOnInit(): void {
    this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data; this.selectBuilding = this.buildingList[1].ID })
  }
  selectBuilding: string = "";

}

interface Building {
  ID: string;
  name: string;
}
