import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeletePorterComponent } from '../dialog-delete-porter/dialog-delete-porter.component';
import { Gender, PorterData, PorterType, Response } from '../../models';

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
  porterData!: PorterData;
  ngOnInit(): void {
    this.api.getPorterData(this.data.porterId).subscribe((res: Response) => this.porterData = res.data)
  }
  updatePorter() {
    //待完成
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
