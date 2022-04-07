import { PropsProduct } from '../../types';
 
interface PropsAction  {
  type: string,
  payload: PropsProduct
}

type Action = PropsAction


export default(state:PropsProduct[] = [], action:Action) => {

  switch(action.type){
    case 'ADD_PRODUCT':
      let productFound:number = state.findIndex((prod:PropsProduct) => prod.id === action.payload.id)

      if (productFound < 0 ) {
        action.payload.qnt = 1;
        state = [ ...state, action.payload ];

      } else {
        state = state.map((prod:PropsProduct) => {
          if(prod.id === action.payload.id) {
            prod.qnt += 1; 
          };
          return prod;
        })
      };

      return state;

    case 'REMOVE_PRODUCT':
      if(state.length === 0) return state;

      let product = state.find((prod:PropsProduct) => prod.id === action.payload.id);

      if(product?.qnt === 1){
        return  state = state.filter((prod:PropsProduct) => prod.id !== action.payload.id);

      } else {
        return state = state.map((prod:PropsProduct) => {
          if(prod.id === action.payload.id) {
            prod.qnt -= 1; 
          };
          return prod;
        })
      } 

    default :
      return state  ;
  }
}
