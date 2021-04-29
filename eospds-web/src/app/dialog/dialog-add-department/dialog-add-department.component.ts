import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    public err: ErrorService,
    public dialogRef: MatDialog,
  ) { }
  floorList: string[] = ["B1", "1F", "2F", "3F", "5F", "6F", "7F"]
  selectBuildingId: string = "";
  selectFloorId: string = "";
  departmentName: string = "";
  ngOnInit(): void {
  }
  addDepartment() {
    //http post department add
    if (this.selectBuildingId != "" && this.selectFloorId != "", this.departmentName != "") {
      let body = new URLSearchParams();
      body.set('building', this.selectBuildingId);
      body.set('floor', this.selectFloorId)
      body.set('name', this.departmentName);
      console.log(body);
      //this.api.addDepartment(body.toString()).subscribe((res: Response) => this.err.handleResponse(res))
      this.dialogRef.closeAll();
    } else {
      this.err.errorDataUnComplete();
    }

  }
  getSelectBuildingId($event: any) {
    console.log($event)
    this.selectBuildingId = $event
  }
}
