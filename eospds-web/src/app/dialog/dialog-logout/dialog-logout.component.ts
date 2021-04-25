import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.css']
})
export class DialogLogoutComponent implements OnInit {

  constructor(private dialogRef: MatDialog, public user: UserService) { }

  ngOnInit(): void {
  }
  logout() {
    this.closeAll();
    this.user.logout();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }
}
