import {Component, OnInit, Output} from '@angular/core';
import {AccountService} from '../services/account.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
    currUser : any;
  // myUser: State;
  // @Output("data") data;
  constructor(public accountService : AccountService ,private route: ActivatedRoute ) {
    this.route.data.subscribe(data => {
      this.currUser = data.data;
    });
   // this.currUser =  this.accountService.getUserData
   //  console.log("curr user myprofile : " , this.currUser)
}

  ngOnInit() {



    }




}
