import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import { PropsProduct } from '../types';

type Cart = {
  cart : PropsProduct[],
}

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;