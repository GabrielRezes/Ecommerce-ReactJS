import { createStore, combineReducers } from 'redux';

import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

import { PropsProduct } from '../types';

const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
  userInfo: userReducer
});

const store = createStore(reducers);

export default store;