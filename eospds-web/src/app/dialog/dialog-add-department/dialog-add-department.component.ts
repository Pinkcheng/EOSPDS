import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ErrorService } from 'src/app/service/error.service';
import { Response, Department } from '../../models';

@Component({
  selector: 'app-dialog-add-department',
  templateUrl: './dialog-add-department.component.html',
  styleUrls: ['./dialog-add-department.component.css']
})
export class DialogAddDepartmentComponent implements OnInit {

  constructor(
    public api: ApiService,
    public err: ErrorService
  ) { }
  floorList: string[] = ["B1", "1F", "2F", "3F", "5F", "6F", "7F"]
  department: Department = { id: "", building: "", floor: "", name: "" }
  ngOnInit(): void {
  }
  addDepartment() {
    //http post department add
    let body = new URLSearchParams();
    body.set('building', this.department.building);
    body.set('floor', this.department.floor)
    body.set('name', this.department.name);
    //this.api.addDepartment(body.toString()).subscribe((res: Response) => this.err.handleResponse(res))
  }
  getSelectBuildingId($event: any) {
    console.log($event)
  }
}
