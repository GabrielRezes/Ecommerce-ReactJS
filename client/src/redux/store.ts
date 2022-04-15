import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import { PropsProduct } from '../types';

const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(reducers);

export default store;