import { combineReducers } from 'redux';
import HomeScreenReducer from '../HomeScreenReducer';
import LoginScreenReducer from '../LoginScreenReducer';
import LoaderReducer from '../LoaderReducer';
import OrderScreenReducer from '../OrderScreenReducer';
import BulkScreenReducer from '../BulkScreenReducer';

const appReducer = combineReducers({
  HomeScreenReducer: HomeScreenReducer,
  LoginScreenReducer: LoginScreenReducer,
  LoaderReducer: LoaderReducer,
  OrderScreenReducer: OrderScreenReducer,
  BulkScreenReducer: BulkScreenReducer,
});

const RootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  // console.log(action.type, 'llllllllll');
  if (action.type == 'CLEAR_DATA') {
    localStorage.removeItem('@user_id');

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default RootReducer;
