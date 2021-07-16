import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login.service';
import {User, UserInfo} from '../../models/user';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import {AccountService} from '../../services/account.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loadingEnable: boolean;
  sidenavEnable = false;
  user: UserInfo;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public dialog: MatDialog, private router: Router,
    public loginService: LoginService,
    public accountService: AccountService,
    public loadingService: LoadingService,
              private appComponent: AppComponent) { }


  ngOnInit() {
    this.accountService.userSubject.subscribe(next => {
      this.user = next;
    });
    this.loadingService.progressEnable.subscribe(next => {
      this.loadingEnable = next;
    });
  }


  enableSidenav() {
    this.sidenavEnable = !this.sidenavEnable;
  }
  useLanguage(language: string) {
    this.appComponent.useLanguage(language);
  }

}
