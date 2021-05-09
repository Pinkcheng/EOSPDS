import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeletePorterComponent } from '../dialog-delete-porter/dialog-delete-porter.component';
import { Gender, PorterType, Response } from '../../models';

@Component({
  selector: 'app-dialog-update-porter',
  templateUrl: './dialog-update-porter.component.html',
  styleUrls: ['./dialog-update-porter.component.css']
})
export class DialogUpdatePorterComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService) {

  }
  porterTypes: PorterType[] = [{ id: 1, name: "全院" }, { id: 2, name: "駐點" }];
  genders: Gender[] = [{ id: 1, name: "男生" }, { id: 2, name: "女生" }];

  porterData = {
    "id": "P10000001",
    "account": "0975879856",
    "name": "李冠億",
    "tag": 123,
    "birthday": "1987-08-07",
    "department": {
      "id": "D1002",
      "building": {
        "id": "B1100",
        "name": "新醫療大樓"
      },
      "floor": "B1",
      "name": "傳送中心"
    },
    "gender": {
      "id": 1,
      "name": "男"
    },
    "type": {
      "id": 1,
      "name": "全院"
    },
    "status": 1,
    "mission": 1,
    "position": "新醫療大樓-5F-5B病房",
    "time": "2021/03/30 10:20"
  }
  ngOnInit(): void {
    this.api.getPorterData("P100000002").subscribe((res: Response) => console.log(res.data))

  }

  deletePorterDialog() {
    this.dialog.open(DialogDeletePorterComponent, {
      width: '300px',
      height: '200px',
      data: {
        porterId: this.data.porterId
      }
    });
  }
  getSelectDepartmentId($event: any) {
    console.log($event)
  }
}
