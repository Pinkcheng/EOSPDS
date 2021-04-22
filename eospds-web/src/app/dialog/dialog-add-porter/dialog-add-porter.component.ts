import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-porter',
  templateUrl: './dialog-add-porter.component.html',
  styleUrls: ['./dialog-add-porter.component.css']
})
export class DialogAddPorterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type: string = '';
  types: string[] = ['全院', '駐點'];
  gender: string = '';
  genders: string[] = ['男', '女'];

  addPorter() {
    //post add porter
  }
}
