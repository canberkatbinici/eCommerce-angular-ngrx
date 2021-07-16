import {UserActionTypes} from './user.action.types';
// import {Product} from '../../models/product';
import {User} from '../../models/user';

export class AddUserToStore {
  readonly type = UserActionTypes.ADD_USER_TO_STORE;

  constructor(public payload: User) {
  }
}
//
// export class RemoveProductFromCart {
//   readonly type = UserActionTypes.REMOVE_PRODUCT_FROM_CART;
//
//   constructor(public payload: number) {
//   }
// }
//
// export class IncrementCartQuantity {
//   readonly type = UserActionTypes.INCREMENT_CART_ITEM_QUANTITY;
//
//   constructor(public payload: number) {
//   }
// }
//
// export class DecrementCartQuantity {
//   readonly type = UserActionTypes.DECREMENT_CART_ITEM_QUANTITY;
//
//   constructor(public payload: number) {
//   }
// }

export type UserActions = AddUserToStore ;
  // | RemoveProductFromCart | IncrementCartQuantity | DecrementCartQuantity;
