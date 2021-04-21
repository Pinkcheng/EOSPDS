import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.css']
})
export class HomepageStaffComponent implements OnInit {

  constructor() { }

  @Input()
  articleHeight!: number;
  ngOnInit(): void {
  }
  staffList = [
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },
    {
      "id": "S00000001",
      "name": "王士嘉",
      "handover": 10,
      "professional": "護理師",
      "department": "新醫療大樓-5B病房",
    },

  ]
}
