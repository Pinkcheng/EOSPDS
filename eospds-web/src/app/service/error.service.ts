import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  constructor(public snackbar: MatSnackBar, public user: UserService) { }

  handleError = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.snackbar.open(error.error.message, 'OK', {
      verticalPosition: 'top', duration: 5000
    })
    if (error.status == 401) {//token過期
      this.user.logout();
    }
    return throwError(errorMessage);
  }
  handleResponse = (res: Response) => {
    if (res.message.length > 0) {
      this.snackbar.open(res.message, 'OK', {
        verticalPosition: 'top', duration: 2000
      })
    }
  }
  errorTextResponse = (text: string) => {
    if (text.length > 0) {
      this.snackbar.open(text, 'OK', {
        verticalPosition: 'top', duration: 5000
      })
    }
  }
  errorDataUnComplete = () => {
    this.snackbar.open('請輸入完整資料', 'OK', {
      verticalPosition: 'top', duration: 5000
    });
  }
  errorDataUnChange = () => {
    this.snackbar.open('資料未變更', 'OK', {
      verticalPosition: 'top', duration: 5000
    });
  }
}
