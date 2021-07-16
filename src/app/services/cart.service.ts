import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Product} from '../models/product';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {stringify} from 'querystring';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice: number;
  cart;


  api = "http://localhost:8080";
  constructor(private http: HttpClient,private store: Store<fromApp.AppState>) {

    this.store.select('shop').subscribe(shop => {
      // console.log(shop)
      this.totalPrice = shop.cart.reduce((count, curItem) => {
        return count + (curItem.quantity * curItem.price);
      }, 0);

      console.log("shop nokta cart")
      this.http.post<Product>(`http://127.0.0.1:8080/saveCart`, shop.cart).subscribe(
        data => console.log('success', data),
      error => console.log('oops', error))
      this.cart = shop.cart;
    });
  }

  // postCart(cart):Observable<any>{
  //
  //   return this.httpClient.post(this.api+"/cart",{cart})
  // }



  getCarts(): Observable<any> {
    return this.http.get(this.api+"/cart");

  }
  get getTotalPrice() {
    return this.totalPrice
  }

  getShopingCart(): Observable<any>{
    this.store.select('shop').subscribe(shop => {
      // console.log(shop)
      this.totalPrice = shop.cart.reduce((count, curItem) => {
        return count + (curItem.quantity * curItem.price);
      }, 0);
    this.cart = shop.cart
    }

      )
    return this.cart

}
}
