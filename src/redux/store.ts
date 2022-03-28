import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

// const store = createStore(combineReducers({
//   cart:  cartReducer,
// }
// ));

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export { store };