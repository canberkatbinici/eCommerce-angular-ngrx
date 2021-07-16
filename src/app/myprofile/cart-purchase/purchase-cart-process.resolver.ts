import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {AccountService} from '../../services/account.service';

@Injectable()
export class PurchaseCartProcessResolver implements Resolve<any> {
  constructor(private accountService: AccountService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.accountService.getUserData[1];
  }
}
