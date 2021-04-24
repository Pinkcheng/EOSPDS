import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { EventManager } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import { User, Response } from '../../models';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit{

  height: number = 0;
  width: number = 0;

  account: string = "admin1";
  password: string = "admin";

  loginData: User = { account: "", password: "" };

  @Output()
  homepageswitch = new EventEmitter<any>();

  constructor(
    public user: UserService,
    public eventManager: EventManager,
    public auth: AuthService,) {
    this.getScreenSize();
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

  login() {
    if (this.account && this.password) {
      this.loginData = { account: this.account, password: this.password }
      this.user.login(this.loginData).subscribe()
    }
  }
}
