import { PropsProduct } from '../../types';

const addProductAction = (product : PropsProduct) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

const removeProductAction = (product : PropsProduct) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product
  }
} 

export {
  addProductAction,
  removeProductAction
};
