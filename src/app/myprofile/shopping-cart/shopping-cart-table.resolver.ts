import { Injectable } from '@angular/core';
import {AccountService} from '../../services/account.service';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Store} from '@ngrx/store';
import {CartService} from '../../services/cart.service';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class shoppingCartTableResolver implements Resolve<any> {
  constructor(private accountService: AccountService,private store : Store<fromApp.AppState> , private cartService : CartService) {}
  cart;
  totalPrice;
  resolve(route: ActivatedRouteSnapshot) {
    // this.store.select('shop').subscribe(shop => {
      this.cart  = this.cartService.getShopingCart()
    console.log("totalpricfe : " , this.totalPrice = this.cartService.getTotalPrice)
    // this.cart.push({"totalprice" : this.totalPrice})
    // console.log("total priceli cart : " , this.cart)
    return this.cart
    }
    // );  }
}
