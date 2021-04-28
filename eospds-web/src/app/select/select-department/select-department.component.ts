import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Building, Department, Response } from 'src/app/models';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-select-department',
  templateUrl: './select-department.component.html',
  styleUrls: ['./select-department.component.css']
})
export class SelectDepartmentComponent implements OnInit {

  constructor(public api: ApiService) {

  }


  buildingList: Building[] = []
  departmentList: Department[] = []

  @Input()
  selectBuildingId: string = "";

  @Input()
  selectDepartmentId: string = "";

  @Output()
  selectDepartmentEvent = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.selectBuildingId != "" && this.selectDepartmentId != "") {
      this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data; })
      this.onSelectBuildingChange(this.selectBuildingId)
    } else {
      this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data; })
    }
  }
  onSelectBuildingChange(selectBuildingId: string) {
    //http get departmentlist of building id
    this.selectBuildingId = selectBuildingId;
    if (selectBuildingId == "B1100") {
      this.departmentList = this.B1100;
    } else if (selectBuildingId == "B1200") {
      this.departmentList = this.B1102;
    } else {
      this.departmentList = this.B1100;
    }
  }
  onSelectDepartmentChange(selectDepartmentId: string) {
    this.selectDepartmentId = selectDepartmentId
    this.selectDepartmentEvent.emit(selectDepartmentId)
  }
  B1100 = [
    {
      "id": "D1001",
      "building": "新醫療大樓",
      "floor": "B1",
      "name": "傳送中心"
    },
    {
      "id": "D1002",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "骨科門診"
    },
    {
      "id": "D1003",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "耳鼻喉科門診"
    }
  ]
  B1102 = [
    {
      "id": "D1001",
      "building": "新醫療大樓",
      "floor": "B1",
      "name": "傳送中心"
    },
    {
      "id": "D1002",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "骨科門診"
    },
    {
      "id": "D1003",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "耳鼻喉科門診"
    }
  ]
}
