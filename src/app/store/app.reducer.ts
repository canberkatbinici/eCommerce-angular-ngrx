import {ActionReducerMap} from '@ngrx/store';

import * as fromShop from './shop/shop.reducer';
import * as fromBrandFilter from './brand-filter/brand-filter.reducer';
import * as fromPriceFilter from './price-filter/price-filter.reducer';
import * as fromUser from './user/user.reducer'

export interface AppState {
  shop: fromShop.State;
  brandFilter: string;
  orderBy: string;
  userState: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shop: fromShop.shoppingListReducer,
  brandFilter: fromBrandFilter.brandFilterReducer,
  orderBy: fromPriceFilter.orderByPriceReducer,
  userState: fromUser.currentUserReducer
};

