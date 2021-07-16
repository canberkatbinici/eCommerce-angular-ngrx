import * as UserActions from './user.action';
import {UserActionTypes} from './user.action.types';
import {User} from '../../models/user';
import {AccountService} from '../../services/account.service';
import {user} from '../../core/data/users';
import {ShopActionTypes} from '../shop/shop.action.types';

export interface State {
  // user: Array<User>;
  user : User
}

const initialState: State = {
  // user: user,
  user: null
};

export function currentUserReducer(state = initialState, action: UserActions.UserActions) {
  let currUser;
  let updatedItemIndex;

  switch (action.type) {


    // case UserActionTypes.ADD_USER_TO_STORE:
    //   updatedCart = [...state.users];
    //   updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
    //     console.log("action.payload")
    //   console.log(action.payload)
    //
    //     updatedCart.push({...action.payload});
    //
    //
    //   return {...state, user: updatedCart};
    case UserActionTypes.ADD_USER_TO_STORE:
      currUser = [state.user];

      // console.log("action.payload[0]")
      // console.log(action.payload)
      currUser.push(action.payload);


      return {...state, user: currUser};
    default:
      return state;

  }

}
