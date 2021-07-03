import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

export const TOKEN = 'access_token';
export const USERNAME = 'user_name';
export const USERID = 'user_id';
export const BUILDINGID = 'building_id';
export const BUILDINGNAME = 'building_name';

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
  writeUserInfo(value: string, userName: string = USERNAME, userId: string = USERID, buildingId: string = BUILDINGID, buildingName: string = BUILDINGNAME) {
    localStorage.setItem(userName, this.jwtHelper.decodeToken(value).name);
    localStorage.setItem(userId, this.jwtHelper.decodeToken(value).id);
    localStorage.setItem(buildingId, this.jwtHelper.decodeToken(value).bid);
    localStorage.setItem(buildingName, this.jwtHelper.decodeToken(value).bname);
  }
  getUserId(userId: string = USERID) {
    return localStorage.getItem(userId);
  }
  getUserName(userName: string = USERNAME) {
    return localStorage.getItem(userName);
  }
  getBuildingId(buildingId: string = BUILDINGID) {
    return localStorage.getItem(buildingId);
  }
  getBuildingName(buildingName: string = BUILDINGNAME) {
    return localStorage.getItem(buildingName);
  }
  removeUserInfo(userId: string = USERID, userName: string = USERNAME, buildingId: string = BUILDINGID, buildingName: string = BUILDINGNAME) {
    if (this.getToken(userId) && this.getToken(userName)) {
      localStorage.removeItem(userId);
      localStorage.removeItem(userName);
      localStorage.removeItem(buildingId);
      localStorage.removeItem(buildingName);
    }
  }
}
@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }
  token: string | null = ""

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // token 可以來自任何地方
    this.token = this.auth.getToken('access_token')
    console.warn(req.url.split('.0')[1])
    if (this.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
      //console.log("TokenAuthHttpInterceptor")
      return next.handle(req);
    } else {
      //console.log("NoTokenHttpRequest")
      return next.handle(req);
    }
  }
}
