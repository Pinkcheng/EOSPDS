import { DialogLogoutComponent } from './../../dialog/dialog-logout/dialog-logout.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-homepage-setting',
  templateUrl: './homepage-setting.component.html',
  styleUrls: ['./homepage-setting.component.css']
})
export class HomepageSettingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input()
  articleHeight!: number;
  ngOnInit(): void {
  }
  settingSwitch: number = 1; //預設初始homepage
  switchSetting($event: number) {
    this.settingSwitch = $event;
  }
  logoutDialog() {
    this.dialog.open(DialogLogoutComponent, {
      width: '300px',
      height: '200px',
    });
  }
}
