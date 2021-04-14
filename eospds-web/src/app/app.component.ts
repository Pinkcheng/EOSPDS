import { Component, HostListener } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public http:HttpService) {
  }

  ngOnInit() {
    this.http.login(123,123).subscribe(response =>{
      console.log(response)
    })
  };
}
