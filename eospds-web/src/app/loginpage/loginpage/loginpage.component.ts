import { Component, HostListener, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { EventManager } from '@angular/platform-browser';

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

  constructor(public http: HttpService, private eventManager: EventManager) {
    this.getScreenSize();
    this.eventManager.addGlobalEventListener('window', 'keyup.enter', () => {
      this.login();
    });
  }

  ngOnInit(): void {
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
          this.loginData =  response;
          console.log(Object.entries(response))
        },
        error => { this.hint =error.error.message })

    } else {
      this.hint = "請輸入帳號與密碼";
    }
  }
}
