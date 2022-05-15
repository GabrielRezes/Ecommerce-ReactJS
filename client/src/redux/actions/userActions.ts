export const setLogin = (payload:any) => {
  return {
    type: 'LOGIN_SUCCESSFUL',
    payload
  };
};

export const setLogout = () => {
  return {
    type: 'LOGOUT',
  };
};