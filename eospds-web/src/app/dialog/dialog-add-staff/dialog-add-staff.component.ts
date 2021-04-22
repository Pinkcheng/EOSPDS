import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-staff',
  templateUrl: './dialog-add-staff.component.html',
  styleUrls: ['./dialog-add-staff.component.css']
})
export class DialogAddStaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addStaff(){
    //http post staff add
    console.log("新增人員")
  }

}
