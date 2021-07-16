import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { BarRatingModule } from "ngx-bar-rating";
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
  MatMenuModule,
  MatNativeDateModule,
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
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { SliderComponent } from './common/slider/slider.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';
import { BuyProcessComponent } from './single-product/buy-process/buy-process.component';
import { ProductDetailsComponent } from './single-product/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './common/alert/alert.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import {Store, StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducer';
import {AccountService} from './services/account.service';
import {MyprofileModule} from './myprofile/myprofile.module';
import { NgPaymentCardModule } from 'ng-payment-card';
import {CreditCardDirectivesModule} from 'angular-cc-library';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


const skltnConfig: SkltnConfig = {
  rectRadius: 10,
  flareWidth: '150px',
  bgFill: '#d8d5d1',
  flareFill: 'rgba(255,255,255, 0.5)',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    SliderComponent,
    FooterComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    BuyProcessComponent,
    ProductDetailsComponent,
    AlertComponent,
    RegisterComponent,
    LoginPageComponent,
    ContactUsComponent


  ],
  imports: [
    MyprofileModule,
    RouterModule,
    BarRatingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgPaymentCardModule,
    CreditCardDirectivesModule,
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
     NgxSkltnModule.forRoot(skltnConfig),
    StoreModule.forRoot(reducers),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AccountService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}
