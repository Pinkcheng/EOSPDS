
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';

@Component({
  selector: 'app-dialog-add-porter',
  templateUrl: './dialog-add-porter.component.html',
  styleUrls: ['./dialog-add-porter.component.css']
})
export class DialogAddPorterComponent implements OnInit {

  constructor(
    public api: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  type: string = '';
  types: string[] = ['全院', '駐點'];
  gender: string = '';
  genders: string[] = ['男', '女'];


  addPorter() {

    let name = "trwtwer";
    let account = "1234rtwre56"
    let password = "4513wretwr54"
    let tag = "12erqwer3"
    let type = 2
    //post add porter

    var body = "name=" + name + "&account=" + account + "&password=" + password + "&tag=" + tag + "&type=" + type;
    this.api.addPorter(body).subscribe((res: Response) => console.log(res.message))
  }
}
