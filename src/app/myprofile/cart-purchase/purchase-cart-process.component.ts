import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductDetailsComponent} from '../../single-product/product-details/product-details.component';
import {ProductService} from '../../services/product.service';
import {LoadingService} from '../../services/loading.service';
import {AccountService} from '../../services/account.service';
import {LoginService} from '../../services/login.service';
import {ProductsComponent} from '../../products/products.component';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {User} from '../../models/user';
import {CreditCardValidators} from 'angular-cc-library';

@Component({
  selector: 'purchase-cart-process',
  templateUrl: './purchase-cart-process.component.html',
  styleUrls: ['./purchase-cart-process.component.scss']
})
export class PurchaseCartProcessComponent  implements OnInit {
  isLinear = false;
  paymentInfo: FormGroup
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currUser: User;
  demoForm : FormGroup;
  private CreditCardValidators: string;

  constructor(public productService: ProductService, public route: ActivatedRoute, private _formBuilder: FormBuilder, public accountService: AccountService, public loginService: LoginService, public store: Store<fromApp.AppState>) {
    // super(productService, route, accountService, store, loginService);

    this.route.data.subscribe(data => {

      this.currUser = data.data;
      console.log("currUser : " , this.currUser)
    });


  }

  ngOnInit() {
    this.paymentInfo = this._formBuilder.group({
      firstName: [],
      lastName: [],
      gender: [],
      mobile: [],
      email: []
    });

    this.demoForm = this._formBuilder.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      cartName: ['', [new RequiredValidator]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
}
