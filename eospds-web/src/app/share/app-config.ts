import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  public readonly apiUrl = 'http://10.10.105.11:9487';
  public readonly options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
}
