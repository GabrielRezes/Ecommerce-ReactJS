const session = localStorage.getItem('user');

const initialState = session ? JSON.parse(session) : {
  user: {
    id: '',
    email: ''
  },
};

export default (state:any = initialState, action:any ) => {
 
  switch(action.type) {
    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        userInformation: action.payload,
        isLogged: true
      }

    case 'LOGOUT':
      return {
        ...state,
        userInformation: {},
        isLogged: false
      }  

    default:
      return state  
  };
};