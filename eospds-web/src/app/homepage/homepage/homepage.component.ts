import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  headerHeight!: number;
  articleHeight!: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.headerHeight = window.innerHeight * 0.1;
    this.articleHeight = window.innerHeight * 0.9;
  }

  homepageSwitch!: number;
  switchHomepage($event:number){
    this.homepageSwitch = $event;
  }
}
