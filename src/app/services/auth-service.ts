import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {User, UserInfo} from '../models/user';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements  CanActivate {
  user:UserInfo;
  constructor(public accountService: AccountService, public router: Router) {}
  canActivate(): boolean {
    this.accountService.userSubject.subscribe(next => {
      this.user = next;
    });
    if (this.user) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }

}
