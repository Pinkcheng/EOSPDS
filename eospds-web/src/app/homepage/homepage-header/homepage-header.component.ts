import { AuthService } from './../../service/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})
export class HomepageHeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  department: string | null = this.auth.getUserName();
  ngOnInit(): void {

  }

  switchNumber!: number;
  title = '傳送員管理系統';


  @Input()
  headerHeight!: number;

  @Output()
  missionSwitch = new EventEmitter<any>();
  @Output()
  staffSwitch = new EventEmitter<any>();
  @Output()
  settingSwitch = new EventEmitter<any>();

  switchToMission() {
    this.missionSwitch.emit(0)
  }
  switchToStaff() {
    this.staffSwitch.emit(1)
  }
  switchToSetting() {
    this.settingSwitch.emit(2)
  }

}
