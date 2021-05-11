
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    public dialogRef: MatDialog,
    public dialog: MatDialog,
    public err: ErrorService
  ) { }

  ngOnInit(): void {
  }

  porterTypes: PorterType[] = [{ id: 1, name: "全院" }, { id: 2, name: "駐點" }];
  genders: Gender[] = [{ id: 1, name: "男生" }, { id: 2, name: "女生" }];

  secondPassword: string = "123";
  porterInformation: PorterInformation = {
    name: "",
    mobile: "",
    password: "",
    tag: "",
    type: 0,
    department: "",
    gender: 0,
    birthday: "",
  }

  checkPassword(password: string, secondPassword: string): boolean {
    if (password == secondPassword) {
      return true
    } else {
      return false
    }
  }
  addPorter() {
    let body = new URLSearchParams();
    if (this.porterInformation.name.trim() != "") {
      body.set('name', this.porterInformation.name.trim())
      if (this.porterInformation.mobile.trim() != "") {
        body.set('mobile', this.porterInformation.mobile.trim())
        if (this.porterInformation.password.trim() != "" &&
          this.checkPassword(this.porterInformation.password.trim(), this.secondPassword.trim())) {
          body.set('password', this.porterInformation.password.trim())
          if (this.porterInformation.tag.trim() != "") {
            body.set('tag', this.porterInformation.tag.trim())
            if (this.porterInformation.type != 0) {
              body.set('type', this.porterInformation.type.toString())
              if (this.porterInformation.type.toString() == '2') {
                if (this.porterInformation.department != "") {
                  body.set('department', this.porterInformation.department)
                  this.addPorterApi(body);
                } else {
                  this.err.errorDataUnComplete();
                }
              } else {
                this.addPorterApi(body);
              }
            } else {
              this.err.errorDataUnComplete();
            }
          } else {
            this.err.errorDataUnComplete();
          }
        } else {
          this.err.errorTextResponse('請確認密碼')
        }
      } else {
        this.err.errorDataUnComplete();
      }
    } else {
      this.err.errorDataUnComplete();
    }
  }
  addPorterApi(body: any) {
    this.api.addPorter(body.toString()).subscribe((res: Response) => {
      this.err.handleResponse(res);
      this.dialogRef.closeAll();
    })
  }

  getSelectDepartmentId($event: any) {
    this.porterInformation.department = $event;
  }
}

export interface PorterInformation {
  name: string;
  mobile: string;
  password: string;
  tag: string;
  type: number;
  department: string;
  gender: number;
  birthday: string;
}
