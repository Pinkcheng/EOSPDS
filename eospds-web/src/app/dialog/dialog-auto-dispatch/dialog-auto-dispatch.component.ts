import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-auto-dispatch',
  templateUrl: './dialog-auto-dispatch.component.html',
  styleUrls: ['./dialog-auto-dispatch.component.css']
})
export class DialogAutoDispatchComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
  }

  autoDispatch() {

    if (this.data.CheckMissionList.length !=0) {
      //http auto dispatch
    }
  }
}
