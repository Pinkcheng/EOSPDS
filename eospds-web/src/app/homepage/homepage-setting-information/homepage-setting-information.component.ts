import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-setting-information',
  templateUrl: './homepage-setting-information.component.html',
  styleUrls: ['./homepage-setting-information.component.css']
})
export class HomepageSettingInformationComponent implements OnInit {

  constructor() { }
  passwordLength: string = "";
  ngOnInit(): void {
    //get department information
  }
  information = {
    "id": "D1001",
    "department": "新醫療大樓-B1-傳送中心",
  }
}
