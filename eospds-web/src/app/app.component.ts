import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login$ = new Observable<boolean>();

  constructor(
    public user: UserService
  ) {

  }
  ngOnInit() {
    this.login$ = this.user.getLoginStatus();
  };
}
