import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { EventManager } from '@angular/platform-browser';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {



  height!: number;
  width!: number;
  account: string = "admin";
  password: string = "admin";
  hint!: string;
  loginData!: Object;

  @Output()
  homepageswitch = new EventEmitter<any>();

  constructor(public http: HttpService, private eventManager: EventManager) {

  }

  ngOnInit(): void {


    this.eventManager.addGlobalEventListener('window', 'keyup.enter', () => {
      this.login();
    });
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
  getAccount($event: any) {
    this.account = $event.target.value;
  }
  getPassword($event: any) {
    this.password = $event.target.value;
  }
  login() {
    if (this.account && this.password) {
      console.log(this.account, this.password)
      this.http.login(this.account, this.password).subscribe(
        response => {
          this.loginData = response;
          console.log(Object.values(response)[1])
          let code = Object.values(response)[1];
          if (code == 2000) {
            this.homepageswitch.emit(true)
            GlobalConstants.isPorterCenter = true;
          }
        },
        error => { this.hint = error.error.message })

    } else {
      this.hint = "請輸入帳號與密碼";
    }
  }
}
