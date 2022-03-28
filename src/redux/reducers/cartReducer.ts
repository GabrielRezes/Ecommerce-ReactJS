export default(state = [1], action:any) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      return state = [...state, action.payload]

    // case 'REMOVE_PRODUCT':
    //   return {

    //   }  

    default :
      return state  ;
  }
}

// export default function cartReducer () { return ''}