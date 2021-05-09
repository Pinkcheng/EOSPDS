import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
    this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data; console.log(this.buildingList)})
    if (this.selectBuildingId != "" && this.selectDepartmentId != "") {
      //http get department list of selectBuildingId
      if (this.selectBuildingId == "B0001") {
        this.departmentList = this.B0001;
      } else if (this.selectBuildingId == "B0002") {
        this.departmentList = this.B0002;
      } else {
        this.departmentList = this.B0003;
      }
    }
  }
  onSelectBuildingChange(selectBuildingId: string) {
    this.selectBuildingId = selectBuildingId;
    this.selectDepartmentId = "";
    this.selectDepartmentEvent.emit(this.selectDepartmentId)
    //http get departmentlist of building id
    if (selectBuildingId == "B0001") {
      this.departmentList = this.B0001;
    } else if (selectBuildingId == "B0002") {
      this.departmentList = this.B0002;
    } else {
      this.departmentList = this.B0003;
    }
  }
  onSelectDepartmentChange(selectDepartmentId: string) {
    this.selectDepartmentId = selectDepartmentId
    this.selectDepartmentEvent.emit(selectDepartmentId)
  }
  B0001 = [
    {
      "id": "D1001",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "B1",
      "name": "傳送中心"
    },
    {
      "id": "D1002",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "骨科門診"
    },
    {
      "id": "D1003",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "耳鼻喉科門診"
    }
  ]
  B0002 = [
    {
      "id": "D1004",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "B1",
      "name": "傳送中心123"
    },
    {
      "id": "D1005",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "骨科門診123"
    },
    {
      "id": "D1006",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "耳鼻喉科門診123"
    }
  ]
  B0003 = [
    {
      "id": "D1007",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "B1",
      "name": "傳送中心321"
    },
    {
      "id": "D1008",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "骨科門診321"
    },
    {
      "id": "D1009",
      "building": { "id": "B1101", "name": "新醫療大樓" },
      "floor": "1F",
      "name": "耳鼻喉科門診321"
    }
  ]
}
