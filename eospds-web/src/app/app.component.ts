import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor() {

  }

  ngOnInit() {

  };

  loginSwitch!: boolean;
  switchHomepage($event: boolean) {
    this.loginSwitch = $event;
  }
}
