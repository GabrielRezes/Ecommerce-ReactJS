import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;