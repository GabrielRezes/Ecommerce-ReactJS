import { PropsProduct } from '../../types';
 
interface PropsAction  {
  type: string,
  payload: PropsProduct
}

type Action = PropsAction

export default(state:any = [], action:Action) => {
  switch(action.type){

    case 'ADD_PRODUCT':
      return state = [ ...state, action.payload ];

    // case 'REMOVE_PRODUCT':
    //   return {

    //   }  

    default :
      return state  ;
  }
}

// export default function cartReducer () { return ''}