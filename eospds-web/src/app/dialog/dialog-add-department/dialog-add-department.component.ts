import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Response } from '../../models';

@Component({
  selector: 'app-dialog-add-department',
  templateUrl: './dialog-add-department.component.html',
  styleUrls: ['./dialog-add-department.component.css']
})
export class DialogAddDepartmentComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }
  addDepartment() {
    //http post department add
    let body = new URLSearchParams();
    body.set('id', "D0005");
    body.set('name', "新醫療大樓-5F-5A病房");
    this.api.addDepartment(body.toString()).subscribe((res: Response) => console.log(res.message))
  }
}
