import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../share';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,
    public app: AppConfig,
    public auth: AuthService,
    public err: ErrorService) { }


  //新增傳送員 未完成
  addPorter(body: any): Observable<Response> {
    return this.http.post<Response>(this.app.apiUrl + this.app.apiVersion + '/porter', body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得傳送員列表
  getPorterList(): Observable<Response> {
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/porter', this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定傳送員資料
  getPorter(porterId: string): Observable<Response> {
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/porter/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定傳送員
  deletePorter(porterId: string): Observable<Response> {
    return this.http.delete<Response>(this.app.apiUrl + this.app.apiVersion + '/porter/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //新增請求單位
  addDepartment(body: any): Observable<Response> {
    return this.http.post<Response>(this.app.apiUrl + this.app.apiVersion + '/department', body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得請求單位列表
  getDepartmentList(): Observable<Response> {
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/department', this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定請求單位資料
  getDepartment(departmentId: string): Observable<Response> {
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/department/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定請求單位
  deleteDepartment(departmentId: string): Observable<Response> {
    return this.http.delete<Response>(this.app.apiUrl + this.app.apiVersion + '/department/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
}
