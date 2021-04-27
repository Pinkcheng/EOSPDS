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

  apiURL: string = this.app.apiUrl + this.app.apiVersion;
  apiBuilding: string = '/building';
  apiDepartment: string = '/department';
  apiStaff: string = '/staff';
  apiPorter: string = '/porter';
  apiMission: string = '/mission';
  apiInstrument: string = '/instrument';
  apiMissionType: string = '/mission_type';
  apimissionLabel: string = '/mission_label';
  apiDispatch: string = '/dispatch';
  apiAction: string = '/action';

  /*-----------------------building------------------------------*/
  getBuildingList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiBuilding, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------department------------------------------*/
  //新增請求單位
  addDepartment(body: any): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiDepartment, body, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得請求單位列表
  getDepartmentList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定請求單位資料
  getDepartment(departmentId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定請求單位
  deleteDepartment(departmentId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiDepartment + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定請求單位
  updateDepartment(departmentId: string, body: any): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiDepartment + departmentId, body, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------staff------------------------------*/
  /*-----------------------porter------------------------------ */
  //新增傳送員
  addPorter(body: any): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiPorter, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得傳送員列表
  getPorterList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiPorter, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定傳送員資料
  getPorter(porterId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiPorter + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定傳送員
  deletePorter(porterId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiPorter + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission------------------------------*/
  /*-----------------------instrument------------------------------*/
  /*-----------------------mission_type------------------------------*/
  /*-----------------------mission_label------------------------------*/
  /*-----------------------dispatch------------------------------*/
  /*-----------------------action------------------------------*/
}
