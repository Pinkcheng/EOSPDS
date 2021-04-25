import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

export const TOKEN = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService) { }

  //檢查token是否過期
  isTokenExpired(token: string = TOKEN): boolean {
    let jwtStr = this.getToken(token);
    if (jwtStr) {
      return this.jwtHelper.isTokenExpired(jwtStr);  // token expired?
    } else {
      return true;        // no token
    }
  }
  //存放token到local storage
  writeToken(value: string, token: string = TOKEN) {
    localStorage.setItem(token, value);
  }
  //取得local storage的token
  getToken(token: string = TOKEN) {
    return localStorage.getItem(token);
  }
  //刪除local storage的token
  removeToken(token: string = TOKEN) {
    if (this.getToken(token)) {
      localStorage.removeItem(token);
    }
  }
}
@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {


  constructor(public auth: AuthService) { }
  access_token: string | null = ""

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // token 可以來自任何地方
    this.access_token = this.auth.getToken('access_token')
    console.log(this.access_token)
    console.log(req)
    if (this.access_token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.access_token}`
        }
      });
      console.log("TokenAuthHttpInterceptor")
      return next.handle(req);
    } else {
      console.log("NoTokenHttpRequest")
      return next.handle(req);
    }


  }
}
