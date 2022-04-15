import { PropsProduct, PropsProductReducer } from '../../types';

interface PropsAction  {
  type: string,
  payload: PropsProduct
}

type Action = PropsAction

const initialState = {
  catalog: [],
  isLoadingProducts: true
};


export default(state:PropsProductReducer = initialState, action:Action) => {
  switch(action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        catalog: action.payload
      };

    case 'SET_LOADING_GET_PRODUCTS':
      return {
        ...state,
        isLoadingProducts: action.payload 
      };
      
    default:
      return state;  
  }

}