import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import {LoginComponent} from '../login/login.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;
  loggedIn = new BehaviorSubject(this.user);
  constructor(public dialog: MatDialog,private router: Router) { }

  isLoggedIn(): boolean {
    console.log(this.loggedIn);
    return true;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // logout() {
  //   this.user = null;
  //
  //   this.loggedIn.next(this.user);
  //   this.router.navigate(['home']);
  // }
}
