import {Component, Input, OnInit} from '@angular/core';
import {DecrementCartQuantity, IncrementCartQuantity, RemoveProductFromCart} from '../../../store/shop/shop.action';
import {Product} from '../../../models/product';
import {CartService} from '../../../services/cart.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('product') product: Product;
  constructor(private cartService: CartService,private store: Store<fromApp.AppState>) {

  }
  ngOnInit() {
  }



  onIncrementCartItem(): void {
    console.log('onIncrement cart click');
    this.store.dispatch(new IncrementCartQuantity(this.product.id));
  }

  onDecrementCartItem(): void {
    console.log('onDecrement cart click');
    this.store.dispatch(new DecrementCartQuantity(this.product.id));
  }

  onRemoveCartItem(): void {
    console.log(this)
    this.store.dispatch(new RemoveProductFromCart(this.product.id));
  }



}
