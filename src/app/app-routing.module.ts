import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {ProfileInformationComponent} from './myprofile/profile-information/profile-information.component';
import {ManageAddressComponent} from './myprofile/manage-address/manage-address.component';
import {ReviewsRatingComponent} from './myprofile/reviews-rating/reviews-rating.component';
import {SavedCardsComponent} from './myprofile/saved-cards/saved-cards.component';
import {WishlistComponent} from './myprofile/wishlist/wishlist.component';
import {MyRewardsComponent} from './myprofile/my-rewards/my-rewards.component';
import {NotificationsComponent} from './myprofile/notifications/notifications.component';
import {AuthService} from './services/auth-service';
import {AuthenticationService} from './services/authentication.service';
import {BuyProcessComponent} from './single-product/buy-process/buy-process.component';
import {ProductDetailsComponent} from './single-product/product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import { getRegisterComponent, RegisterComponent} from './login/register/register.component';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ShoppingCartTableComponent} from './myprofile/shopping-cart/shopping-cart-table.component';
import {ManageAddressResolver} from './myprofile/manage-address/manage-address.resolver';
import {ProfileInformationResolver} from './myprofile/profile-information/profile-information.resolver';
import {myprofileResolver} from './myprofile/myprofile.resolver';
import {buyProcessResolver} from './single-product/buy-process/buy-process.resolver';
import {PurchaseCartProcessComponent} from './myprofile/cart-purchase/purchase-cart-process.component';
import {PurchaseCartProcessResolver} from './myprofile/cart-purchase/purchase-cart-process.resolver';
import {shoppingCartTableResolver} from './myprofile/shopping-cart/shopping-cart-table.resolver';
import {MyOrdersComponent} from './myprofile/my-orders/my-orders.component';
// import {productDetailsResolver} from './single-product/product-details/product-details.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: getRegisterComponent(),

  },
  {
    path: 'login',
    component: LoginPageComponent,
    // canDeactivate: [AuthService]

  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'products/:id',
    component: SingleProductComponent,
    children: [
      {
        path: ':buy',
        component: BuyProcessComponent,
        resolve : { data: buyProcessResolver},

      },
      {
        path: '',
        component: ProductDetailsComponent,
        // resolve: {data : productDetailsResolver},
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthService],
    resolve : { data: myprofileResolver},
    children: [
      {path: 'my-orders',
        component: MyOrdersComponent
      },
      {
        path: 'profile',
        component: ProfileInformationComponent,
        resolve : { data: ProfileInformationResolver}

      },
      {
        path: 'address',
        component: ManageAddressComponent,
        resolve : { data: ManageAddressResolver}
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'reviews',
        component: ReviewsRatingComponent
      },
      {
        path: 'carddetails',
        component: SavedCardsComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'rewards',
        component: MyRewardsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartTableComponent,
        // canActivate: [AuthService],
        resolve: { data : shoppingCartTableResolver}
      },
      {
        path: 'purchase',
        component: PurchaseCartProcessComponent,
        resolve : { data: PurchaseCartProcessResolver}

        // canActivate: [AuthService]
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]

  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '*', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
ManageAddressResolver ,
    ProfileInformationResolver,
    myprofileResolver,
    buyProcessResolver,
    PurchaseCartProcessResolver,
    shoppingCartTableResolver,
    // productDetailsResolver
  ]
})
export class AppRoutingModule {
}
