import {Component, ViewChild, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { HttpClient } from  "@angular/common/http";
import {AccountService} from './services/account.service';
import {User} from './models/user';
import {AddUserToStore} from './store/user/user.action';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {CartService} from './services/cart.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class  AppComponent implements OnDestroy, OnInit {
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;
  title = 'e-comm';

  // private http: HttpClient

  constructor(public translate: TranslateService , private http: HttpClient, private accountService: AccountService, public store: Store<fromApp.AppState>,public cartService: CartService
  ) {
   // new translate.setDefaultLang('en');
   //  translate.setDefaultLang('tr');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('tr');
    this.setupAuth()

  }
   useLanguage(language: string) {
    console.log("useLanguage")
    this.translate.use(language);
  }

  toggelNavbar() {
    this.drawer.toggle();
  }

  // sideNavMenu = [
  //   {
  //     title: 'home',
  //     link: '/home'
  //   },
  //   {
  //    title: 'products',
  //    link: '/products'
  //  },
  //  {
  //    title: 'images',
  //    link: ''
  //  },
  //  {
  //    title: 'contact-us',
  //    link: ''
  //  }
  //
  // ];

  ngOnDestroy(): void {
    // setTimeout('', 5000);
    // this.http.post("http://localhost:8080/saveCart",
    //   {
    //     "name": "Customer004",
    //     "email": "customer004@email.com",
    //     "tel": "0000252525"
    //   })
    //   .subscribe(
    //     data => {
    //       console.log("POST Request is successful ", data);
    //     },
    //     error => {
    //
    //       console.log("Error", error);
    //
    //     }
    //   );
    // console.log("bye")
  }

  ngOnInit(): void {
    // console.log('init')
    // this.setupAuth()
  }



   setupAuth(){
    console.log("setupAuth")
    console.log("isauthenticaTE ", this.accountService.isAuthanticated)
    if (this.accountService.isAuthanticated) {
      this.accountService.reloadUser(this.accountService.userValue.token,this.accountService.userValue.id)
      console.log("ifin ici")
    }
  }
}
