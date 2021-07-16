import {AccountService} from '../../services/account.service';
export let user;

export class myUser {

  constructor(accountService : AccountService){
    user = accountService.userValue
  }

}
