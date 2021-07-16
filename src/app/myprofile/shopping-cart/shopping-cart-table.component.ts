import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {AddProductToCart, DecrementCartQuantity, IncrementCartQuantity, RemoveProductFromCart} from '../../store/shop/shop.action';
import {ObserversModule} from '@angular/cdk/observers';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.scss']
})
export class ShoppingCartTableComponent implements OnInit , DoCheck{
  totalPrice: number;
  cart;

  constructor(private cartService: CartService,private store: Store<fromApp.AppState> , private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log("data : " , data)
      this.cart = data.data;
    });
   this.totalPrice = this.cartService.getTotalPrice
  }
  ngDoCheck(){
    this.store.select('shop').subscribe(shop => {
      this.cart  = this.cartService.getShopingCart()
      this.totalPrice = this.cartService.getTotalPrice

    });
  }
  ngOnInit() {

    // this.route.data.subscribe(data => {
    //   console.log("data : " , data)
    //   this.cart = data.data;
    // });
    // this.cart  = this.cartService.getShopingCart()


  }



}
