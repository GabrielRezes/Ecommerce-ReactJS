import { PropsProduct, PropsProductCart } from '../../types';
 
interface PropsAction  {
  type: string,
  payload: PropsProduct
}

type Action = PropsAction


export default(state:PropsProduct[] = [], action:Action) => {

  switch(action.type){
    case 'ADD_PRODUCT':

      let index = state.findIndex((product:PropsProduct) => product.id === action.payload.id)
  
      if(index === -1) {
        action.payload.qnt = 1
        return state =  [...state, action.payload ]
      }
      
      return state.map((product:PropsProduct) => {
        if(product.id === action.payload.id){
          product.qnt += 1;
        };           
        return product;
      })

    case 'REMOVE_PRODUCT':
      if(state.length === 0) return state;

      let product = state.find((product: PropsProduct) => product.id === action.payload.id);

      if(product?.qnt === 1) {
        return state.filter((product: PropsProduct) => product.id !== action.payload.id);
      }

      return state.map((product: PropsProduct) => {
        if(product.id === action.payload.id){
          product.qnt -= 1;
        };           
        return product;
      })

    default :
      return state  ;
  }
}
