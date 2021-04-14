import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) {
  }

  login(username: any, password:any){
    const body={"username":username, "password":password}
    return this.http.post('http://10.10.105.11:9487/login',body)
  }
}
