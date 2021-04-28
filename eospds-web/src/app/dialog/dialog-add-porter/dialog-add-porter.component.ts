
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ErrorService } from 'src/app/service/error.service';
import { Response } from '../../models';

@Component({
  selector: 'app-dialog-add-porter',
  templateUrl: './dialog-add-porter.component.html',
  styleUrls: ['./dialog-add-porter.component.css']
})
export class DialogAddPorterComponent implements OnInit {

  constructor(
    public api: ApiService,
    public dialog: MatDialog,
    public err: ErrorService
  ) { }

  ngOnInit(): void {
  }
  type: string = '';
  types: string[] = ['全院', '駐點'];
  gender: string = '';
  genders: string[] = ['男', '女'];


  addPorter() {

    let name = "qewrqwfgerqre";
    let account = "rtwerterqwferwert"
    let password = "4513wrqwefretwr54"
    let tag = "rqwefr"
    let type = 2
    //post add porter

    var body = "name=" + name + "&account=" + account + "&password=" + password + "&tag=" + tag + "&type=" + type;
    this.api.addPorter(body.toString()).subscribe((res: Response) => this.err.handleResponse(res))
  }
}
