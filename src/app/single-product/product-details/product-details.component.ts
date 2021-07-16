import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {SingleProductComponent} from '../single-product.component';
import { MatDialog } from '@angular/material';
import {User, UserInfo} from '../../models/user';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import {AccountService} from '../../services/account.service';
import {LoginService} from '../../services/login.service';
import {ProductsComponent} from '../../products/products.component';
import {AddProductToCart} from '../../store/shop/shop.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends SingleProductComponent implements OnInit {
  @Input('product') product: Product;
  user: UserInfo;


  constructor(public productService: ProductService, public route: ActivatedRoute,
              public accountService: AccountService,
              public store: Store<fromApp.AppState>,
              public router : Router,
  public loginService: LoginService) {
    super(productService, route ,store,router);
    this.user =  this.accountService.userValue;

  }

  ngOnInit() {
  }

  onAddProductToCart(): void {
    this.store.dispatch(new AddProductToCart(this.product));
    console.log(this.product)
  }
}
