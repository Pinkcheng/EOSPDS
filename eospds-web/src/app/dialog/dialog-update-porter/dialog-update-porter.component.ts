import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeletePorterComponent } from '../dialog-delete-porter/dialog-delete-porter.component';
import { Response } from '../../models';

@Component({
  selector: 'app-dialog-update-porter',
  templateUrl: './dialog-update-porter.component.html',
  styleUrls: ['./dialog-update-porter.component.css']
})
export class DialogUpdatePorterComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService) {

  }

  porterData = {
    "id": "P00000001",
    "name": "李冠億",
    "account": "0123456789",
    "tag": 123,
    "type": 1,
    "birthday": "1987/01/23",
    "gender": "男",
    "mission": 10,
    "added_date": "2021/03/03"
  }
  ngOnInit(): void {
    this.api.getPorter("P100000002").subscribe((res: Response) => console.log(res.data))
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

}
