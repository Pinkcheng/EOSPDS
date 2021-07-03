import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response, User } from '../models';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AppConfig } from '../share';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient,
    public auth: AuthService,
    public app: AppConfig) { }

  loginStatus = new BehaviorSubject<boolean>(false);
  adminLogin = new BehaviorSubject<boolean>(false);

  loginServer(loginData: User): Observable<Response> {
    let body = new URLSearchParams();
    body.set('account', loginData.account);
    body.set('password', loginData.password);
    return this.http.post<Response>(this.app.apiUrl + '/auth/login', body.toString(), this.app.apiOptions)
  }

  //登入
  login(loginData: User): Observable<Response> {
    return this.loginServer(loginData).pipe(
      map((res: Response) => {
        if (res.status == 1) {
          this.loginStatus.next(true);
          this.auth.writeToken(res.data);
          this.auth.writeUserInfo(res.data);
        }
        return res
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err.error)
      }))
  }
  //登出
  logout() {
    this.loginStatus.next(false);
    this.auth.removeToken();
    this.auth.removeUserInfo();
  }
  //取得登入狀態
  getLoginStatus(): Observable<boolean> {
    return this.loginStatus;
  }
  //檢查使用者狀態
  checkUser(): Observable<boolean> {
    if (!this.auth.isTokenExpired()) {
      this.loginStatus.next(true);
      return of(true);
    } else {
      this.auth.removeToken();
      this.auth.removeUserInfo();
      return of(false);
    }
  }
  //確認是否為admin登入
  getAdminLogin(): Observable<boolean> {
    return this.adminLogin;
  }
  //設定是否為admin登入
  setAdminLogin(isAdmin: boolean) {
    this.adminLogin.next(isAdmin);
  }
  getUserId() {
    return this.auth.getUserId()
  }
  getUserName() {
    return this.auth.getUserName()
  }
  getBuildingId() {
    return this.auth.getBuildingId()
  }
  getBuildingName() {
    return this.auth.getBuildingName()
  }
}
