import { AuthService } from 'src/app/service/auth.service';
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
  userId: string | null = this.auth.getUserId();
  constructor(
    public user: UserService,
    public auth: AuthService,
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    //設定與檢查是否為admin
    console.log(this.userId)
    if (this.userId) {
      let permission = this.userId[0];
      if (permission === '-') {
        this.user.setAdminLogin(true); //set Admin login
        this.isAdminLogin$ = this.user.getAdminLogin();
      } else if (permission === 'S') {
        this.user.setAdminLogin(false);
      } else {
        this.user.setAdminLogin(false); //非可使用此系統之人員
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.headerHeight = window.innerHeight * 0.1;
    this.articleHeight = window.innerHeight * 0.9;
  }

  homepageSwitch: number = 0; //預設初始homepage
  switchHomepage($event: number) {
    this.homepageSwitch = $event;
  }
}
