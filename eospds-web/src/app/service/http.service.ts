import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) {
  }

  options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
  login(account: string, password: string) {
    let body = new URLSearchParams();
    body.set('account', account);
    body.set('password', password);
    return this.http.post('http://10.10.105.11:9487/auth/login', body.toString(), this.options)
  }
}
