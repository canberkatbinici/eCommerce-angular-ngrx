import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../../models/user';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute} from '@angular/router';
// import {currUser} from '../myprofile.component';
0
@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
  public currUser;
  // @Input("data") currUser;
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, public accountService: AccountService, private route: ActivatedRoute ) {


    this.route.data.subscribe(data => {
      this.currUser = data.data;
    });

  }

  ngOnInit() {

    this.profileForm = this.fb.group({
      firstName: [],
      lastName: [],
      gender: [],
      mobile: [],
      email: []
    });
  }
}
