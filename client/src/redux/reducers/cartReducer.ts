import { PropsProduct, PropsCartReducer } from '../../types';
 
interface PropsAction  {
  type: string,
  payload: PropsProduct
}

type Action = PropsAction

const initialState = {
  products: [],
  isLoadingGetProducts : false
}

export default(state:PropsCartReducer = initialState, action:Action) => {

  switch(action.type){
    case 'ADD_PRODUCT':

      let index = state.products.findIndex((product:PropsProduct) => product.id === action.payload.id)

      console.log(index)
  
      if(index === -1) {
        action.payload.qnt = 1;

        return {
          ...state, 
          products: [...state.products, action.payload]
        };
      }

      return {
        ...state, 
        products: state.products.map((product:PropsProduct, i:number) => {
          if(product.id === action.payload.id) {
            product.qnt += 1
          };
          return product;
        })
      };

    case 'REMOVE_PRODUCT':
      if(state.products.length === 0) return state;

      let product = state.products.find((product: PropsProduct) => product.id === action.payload.id);

      if(product?.qnt === 1) {
        return {
          ...state,
          products: state.products.filter((product: PropsProduct) => product.id !== action.payload.id)
        };
      };

      return {
        ...state,
        products: state.products.map((product:PropsProduct) => {
          if(product.id === action.payload.id){
            product.qnt -= 1;
          };
          return product
        })
      };

    default :
      return state  ;
  }
}
