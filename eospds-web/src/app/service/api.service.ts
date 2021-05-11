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
  apiMissionInstrument: string = '/mission_instrument';
  apiMissionType: string = '/mission_type';
  apiMissionLabel: string = '/mission_label';
  apiDispatch: string = '/dispatch';

  /*-----------------------building------------------------------*/
  getBuildingList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiBuilding, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------department------------------------------*/
  //新增請求單位
  addDepartment(body: any): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiDepartment, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得請求單位列表
  getDepartmentList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定大樓之請求單位列表
  getDepartmentListParams(params: any): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定請求單位資料
  getDepartmentData(departmentId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定請求單位
  deleteDepartment(departmentId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定請求單位資料
  updateDepartmentData(departmentId: string, body: any): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
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
  getPorterData(porterId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiPorter + '/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定傳送員
  deletePorter(porterId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiPorter + '/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission------------------------------*/
  //新增任務
  addMission(body: any): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiMission, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得任務列表
  getMissionList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMission, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務資料
  getMissionData(missionId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMission + '/' + missionId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_instrument------------------------------*/
  //取得任務工具列表
  getMissionInstrumentList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionInstrument, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_type------------------------------*/
  //取得任務類型列表
  getMissionTypeList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionType, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_label------------------------------*/
  //新增任務標籤
  addMissionLabel(body: any): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiMissionLabel, body, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得任務標籤列表
  getMissionLabelList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務類型之任務標籤列表
  getMissionLabelListParams(params: any): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務標籤資料
  getMissionLabelData(missionLabelId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel + '/' + missionLabelId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定任務標籤資料
  updateMissionLableData(missionLabelId: string, body: any): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiMissionLabel + '/' + missionLabelId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
}
