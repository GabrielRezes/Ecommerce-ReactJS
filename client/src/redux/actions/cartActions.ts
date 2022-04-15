import { PropsProduct } from '../../types';

export const addProductToCart = (product : PropsProduct) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const removeProductToCart = (product : PropsProduct) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product
  }
} 

