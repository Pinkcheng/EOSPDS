import { AuthService } from './auth.service';
import { AppConfig } from './../share/app-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient,
    public app: AppConfig,
    public auth: AuthService) {
  }
  access_token: string | null = ""
  getPorterList() {
    this.access_token = this.auth.getToken('access_token')
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/porter', {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${this.access_token}`
      })
    })
  }
}



