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

}
