import { Injectable } from '@angular/core';
import {AccountService} from '../services/account.service';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable()
export class myprofileResolver implements Resolve<any> {
  constructor(private accountService: AccountService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.accountService.getUserData[1];
  }
}
