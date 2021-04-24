import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Response, User } from '../models';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient,
    public snackbar: MatSnackBar,
    public auth: AuthService) { }

  loginStatus = new BehaviorSubject<boolean>(false);

  options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };

  loginServer(loginData: User): Observable<Response> {
    let body = new URLSearchParams();
    body.set('account', loginData.account);
    body.set('password', loginData.password);
    return this.http.post<Response>('http://10.10.105.11:9487/auth/login', body.toString(), this.options)
  }

  //登入
  login(loginData: User): Observable<boolean> {
    return this.loginServer(loginData).pipe(
      map((res: Response) => {
        if (res.status == 1) {
          this.loginStatus.next(true);
          this.snackbar.open(res.message, 'OK', { verticalPosition: 'top', duration: 2000 });
          this.auth.writeToken(res.data);
          return true;
        } else {
          return false;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        this.snackbar.open(err.error.message, 'OK', { verticalPosition: 'top', duration: 2000 });
        return of(false);
      }))
  }
  //登出
  logout() {
    this.loginStatus.next(false);
    this.auth.removeToken();
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
      return of(false);
    }
  }
}
