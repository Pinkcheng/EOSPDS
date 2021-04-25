import { UserService } from './../../service/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isAdminLogin$ = new Observable<boolean>();
  headerHeight: number = 0;
  articleHeight: number = 0;

  constructor(
    public user: UserService
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    //設定與檢查是否為admin
    this.user.setAdminLogin(true); //set Admin login
    this.isAdminLogin$ = this.user.getAdminLogin();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.headerHeight = window.innerHeight * 0.1;
    this.articleHeight = window.innerHeight * 0.9;
  }

  homepageSwitch: number = 2; //預設初始homepage
  switchHomepage($event: number) {
    this.homepageSwitch = $event;
  }
}
