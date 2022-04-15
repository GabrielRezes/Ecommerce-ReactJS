// import { PropsProducts } from '../../types';

export const setLoading = (payload: any) => {
  return {
    type: 'SET_LOADING_GET_PRODUCTS',
     payload 
  }
};

export const setProducts = (payload:any) => {
  return {
    type: 'SET_PRODUCTS',
    payload
  }
}