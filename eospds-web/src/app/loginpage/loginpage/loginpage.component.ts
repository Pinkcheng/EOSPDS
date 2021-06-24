import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { EventManager } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../models';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {

  height: number = 0;
  width: number = 0;

  account: string = "porter_center"; //d1000002 //admin
  password: string = ""; //00000 //admin

  loginData: User = { account: "", password: "" };

  @Output()
  homepageswitch = new EventEmitter<any>();

  constructor(
    public user: UserService,
    public eventManager: EventManager,
    public auth: AuthService,
    public snackbar: MatSnackBar) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    // this.eventManager.addGlobalEventListener('window', 'keyup.enter', () => {
    //   this.login();
    // });
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    console.log(window.innerHeight, window.innerWidth)
  }

  login() {
    if (this.account && this.password) {
      this.loginData = { account: this.account, password: this.password }
      this.user.login(this.loginData).subscribe(res => {
        this.snackbar.open(res.message, 'OK', { verticalPosition: 'top', duration: 2000 });
      })
    }
  }
}
