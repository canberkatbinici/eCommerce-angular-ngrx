import { Injectable } from '@angular/core';
import {AccountService} from '../../services/account.service';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable()
export class ProfileInformationResolver implements Resolve<any> {
  constructor(private accountService: AccountService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log("ne vamış burda : " , this.accountService.getUserData)
    return this.accountService.getUserData[1];
  }
}
