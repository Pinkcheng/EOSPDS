import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-setting',
  templateUrl: './homepage-setting.component.html',
  styleUrls: ['./homepage-setting.component.css']
})
export class HomepageSettingComponent implements OnInit {

  constructor() { }

  @Input()
  articleHeight!: number;
  ngOnInit(): void {
  }

}
