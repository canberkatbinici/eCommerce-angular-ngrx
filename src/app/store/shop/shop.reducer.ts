import {Product} from '../../models/Product';
import {phones} from '../../core/data/phones';
import * as ShopActions from './shop.action';
import {ShopActionTypes} from './shop.action.types';

export interface State {
  // products: Array<Product>;
  cart: Array<Product>;
}

const initialState: State = {
  // products: phones,
  cart: []
};

export function shoppingListReducer(state = initialState, action: ShopActions.ShopActions) {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case ShopActionTypes.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      if (updatedCart[updatedItemIndex].quantity > 9) {
        return state;
      }

      const incrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;


      console.log("this is state")
      console.log(state)

      return {...state, cart: updatedCart};

    case ShopActionTypes.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      if (updatedCart[updatedItemIndex].quantity < 2) {
        return state;
      }


      const decrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      console.log("this is state")
      console.log(state)

      return {...state, cart: updatedCart};

    case ShopActionTypes.ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

      if (updatedItemIndex < 0) {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedCart[updatedItemIndex] = updatedItem;

        updatedCart.push({...action.payload, quantity: 1});
        console.log("ifi")
        console.log(action.payload.id)
      } else {
        console.log("elsi")
        console.log(action.payload)

        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      console.log("this is state")
      console.log(state)

      return {...state, cart: updatedCart};
    case ShopActionTypes.REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      console.log("this is state")
      console.log(state)

      return {...state, cart: updatedCart};
    default:
      return state;

  }


}
