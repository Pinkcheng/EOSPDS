import { HttpParams } from '@angular/common/http';
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
    this.api.getBuildingList().subscribe((res: Response) => { this.buildingList = res.data })
    if (this.selectBuildingId != "" && this.selectDepartmentId != "") {
      //http get department list of selectBuildingId
      let params = new HttpParams().set('building', this.selectBuildingId);
      this.api.getDepartmentListParams(params).subscribe(res=>this.departmentList = res.data)
    }
  }
  onSelectBuildingChange(selectBuildingId: string) {
    this.selectBuildingId = selectBuildingId;
    this.selectDepartmentId = "";
    this.selectDepartmentEvent.emit(this.selectDepartmentId)
    //http get departmentlist of building id
    let params = new HttpParams().set('building', this.selectBuildingId);
    this.api.getDepartmentListParams(params).subscribe(res => this.departmentList = res.data)
  }
  onSelectDepartmentChange(selectDepartmentId: string) {
    this.selectDepartmentId = selectDepartmentId
    this.selectDepartmentEvent.emit(selectDepartmentId)
  }
}
