import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    public user: UserService,
    public auth: AuthService) {

  }
  //循環 檢查目前登入的使用者token是否過期
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.user.checkUser()
        .subscribe(res => {
          if (res) {
            setInterval(() => {
              this.checkStatus();
            }, 1000)    // check current status every 1 min
          }
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }
  //過期即登出
  checkStatus() {
    if (this.auth.isTokenExpired()) {   // if token expired
      this.user.logout();
    }
  }
}
