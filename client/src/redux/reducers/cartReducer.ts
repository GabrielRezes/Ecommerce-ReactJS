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
        console.log(state);
      } else {
        state[productFound].qnt += 1;
        console.log(state);
      }

      return state;

    case 'REMOVE_PRODUCT':
      // let newState = state.map((prod:PropsProduct) => )

      return state;

    default :
      return state  ;
  }
}
