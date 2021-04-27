import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDepartmentComponent } from 'src/app/dialog/dialog-add-department/dialog-add-department.component';
import { DialogUpdateDepartmentComponent } from 'src/app/dialog/dialog-update-department/dialog-update-department.component';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';
@Component({
  selector: 'app-homepage-setting-department',
  templateUrl: './homepage-setting-department.component.html',
  styleUrls: ['./homepage-setting-department.component.css']
})
export class HomepageSettingDepartmentComponent implements OnInit {

  constructor(public dialog: MatDialog, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getDepartmentList().subscribe((res: Response) => console.log(res.data))
  }

  departmentList = [
    {
      "id": "D1001",
      "department": "新醫療大樓-B1-傳送中心",
      "building": "新醫療大樓",
      "floor": "B1",
      "name": "傳送中心"
    },
    {
      "id": "D2101",
      "department": "舊醫療大樓-1F-抽血站",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "抽血站"
    },
    {
      "id": "D2101",
      "department": "舊醫療大樓-1F-抽血站",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "抽血站"
    },
    {
      "id": "D2101",
      "department": "舊醫療大樓-1F-抽血站",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "抽血站"
    },
    {
      "id": "D2101",
      "department": "舊醫療大樓-1F-抽血站",
      "building": "新醫療大樓",
      "floor": "1F",
      "name": "抽血站"
    }
  ]
  mouseEnterIndex: number = 0;
  mouseEnterDepartmentId: string = "";
  getMouseEnter($event: any) {
    this.mouseEnterIndex = $event.path[0].id.split("_")[1];
    this.mouseEnterDepartmentId = this.departmentList[this.mouseEnterIndex].id;
  };

  addDepartmentDialog() {
    this.dialog.open(DialogAddDepartmentComponent, {
      width: '500px',
      height: '300px',
    });
  }

  updateDepartmentDialog() {
    this.dialog.open(DialogUpdateDepartmentComponent, {
      width: '400px',
      height: '300px',
      data: {
        departmentId: this.mouseEnterDepartmentId
      }
    });
  }
}
