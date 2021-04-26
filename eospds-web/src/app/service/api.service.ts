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

  getPorterList(): Observable<Response> {
    return this.http.get<Response>(this.app.apiUrl + this.app.apiVersion + '/porter', this.app.apiOptions).pipe(catchError(this.err.handleError))
  }

}
