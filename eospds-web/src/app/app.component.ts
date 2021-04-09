import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '傳送員管理系統';
  department = '傳送中心';

  headerHeight: any;
  articleHeight: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.headerHeight = window.innerHeight * 0.1;
    this.articleHeight = window.innerHeight * 0.9;
  }
  constructor() {
    this.getScreenSize();
  }
  mission_list = [
    {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 1,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    }, {
      "id": "M100100000000202103310001",
      "type": "檢體",
      "status": 1,
      "add_time": "2021/03/31 02:31",
      "start": "新醫療大樓5F-5B病房",
      "end": "舊醫療大樓1F-檢驗醫學部",
      "porter": "沈泓成"
    }
  ];
  mission_data = {
    "id": "M100100000000202103310001",
    "content": "5055-1 李冠億",
    "type": "檢體",
    "add_time": "2021/03/31 02:31",
    "dispatch_time": "2021/03/31 02:31",
    "start_time": "2021/03/31 02:31",
    "finish_time": "2021/03/31 02:31",
    "dispatch": "自動派遣",
    "add_department": "新醫療大樓5F-5B病房",
    "start_department": "新醫療大樓5F-5B病房",
    "end_department": "舊醫療大樓1F-檢驗醫學部",
    "porter": "沈泓成",
    "staff": "陳怡均"
  };
}
