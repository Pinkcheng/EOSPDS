
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gender } from 'src/app/models/gender';
import { PorterType } from 'src/app/models/porterType';
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

  porterTypes: PorterType[] = [{ id: 1, name: "全院" }, { id: 2, name: "駐點" }];
  genders: Gender[] = [{ id: 1, name: "男生" }, { id: 2, name: "女生" }];

  secondPassword: string = "123";
  porterInformation: PorterInformation = {
    name: "123ewertwer",
    account: "12twert3",
    password: "123",
    tag: "12wertw3",
    type: 1,
    department: "wertw",
    gender: 1,
    birthday: "2021-02-10"
  }
  checkPassword(password: string, secondPassword: string): boolean {
    if (password == secondPassword) {
      return true
    } else {
      return false
    }
  }
  addPorter() {
    let name = this.porterInformation.name.trim();
    let account = this.porterInformation.account.trim();
    let password = this.porterInformation.password.trim();
    let secondPassword = this.secondPassword.trim();
    let tag = this.porterInformation.tag.trim();
    let type = this.porterInformation.type;
    let gender = this.porterInformation.gender;
    let birthday = this.porterInformation.birthday.trim();
    if (this.porterInformation.type == 1) {
      let department = "D1234"
      this.porterInformation.department = department
    } else {
      let department = "D4321"
      this.porterInformation.department = department
    }
    if (name != "" && account != "" && password != "" && secondPassword != "" && birthday != "" && type != 0 && gender != 0) {
      if (this.checkPassword(this.porterInformation.password, this.secondPassword)) {
        var body = "name=" + name + "&account=" + account + "&password=" + password + "&tag=" + tag + "&type=" + type;
        this.api.addPorter(body.toString()).subscribe((res: Response) => this.err.handleResponse(res))
      } else {
        this.err.errorTextResponse("請確認密碼")
      }
    } else {
      this.err.errorTextResponse("請輸入完整資料")
    }
  }
}

export interface PorterInformation {
  name: string;
  account: string;
  password: string;
  tag: string;
  type: number;
  department: string;
  gender: number;
  birthday: string;
}
