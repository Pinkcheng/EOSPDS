import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GlobalConstants } from '..//../common/global-constants';
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

  headerHeight: number = 0;
  articleHeight: number = 0;
  isPorterCenter: boolean = GlobalConstants.isPorterCenter;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.headerHeight = window.innerHeight * 0.1;
    this.articleHeight = window.innerHeight * 0.9;
  }

  homepageSwitch: number = 1; //預設初始homepage
  switchHomepage($event: number) {
    this.homepageSwitch = $event;
  }
}
