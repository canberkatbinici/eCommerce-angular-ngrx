import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyprofileComponent} from './myprofile.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {ManageAddressComponent} from './manage-address/manage-address.component';
import {SavedCardsComponent} from './saved-cards/saved-cards.component';
import {MyRewardsComponent} from './my-rewards/my-rewards.component';
import {ReviewsRatingComponent} from './reviews-rating/reviews-rating.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {ShoppingCartTableComponent} from './shopping-cart/shopping-cart-table.component';
import {RouterModule} from '@angular/router';
import {BarRatingModule} from 'ngx-bar-rating';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {OwlModule} from 'ngx-owl-carousel';
import {ReactiveFormsModule} from '@angular/forms';
import {NgImageSliderModule} from 'ng-image-slider';
import {NgxSkltnModule} from 'ngx-skltn';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../store/app.reducer';
import {CartItemComponent} from './shopping-cart/cart-item/cart-item.component';
import {PurchaseCartProcessComponent} from './cart-purchase/purchase-cart-process.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [MyprofileComponent,
    ProfileInformationComponent,
    ManageAddressComponent,
    SavedCardsComponent,
    MyRewardsComponent,
    ReviewsRatingComponent,
    NotificationsComponent,
    WishlistComponent,
    ShoppingCartTableComponent,
  CartItemComponent,
    PurchaseCartProcessComponent,
    MyOrdersComponent
  ],
  imports: [
    RouterModule,
    BarRatingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    OwlModule,
    MatTreeModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgxSkltnModule.forRoot(),
    StoreModule.forRoot(reducers),
    TranslateModule
  ],
  exports: [
    MyprofileComponent,
    ProfileInformationComponent,
    ManageAddressComponent,
    SavedCardsComponent,
    MyRewardsComponent,
    ReviewsRatingComponent,
    NotificationsComponent,
    WishlistComponent,
    ShoppingCartTableComponent,
    CartItemComponent,
    PurchaseCartProcessComponent],
})
export class MyprofileModule {
}
