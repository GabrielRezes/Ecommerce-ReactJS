import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001' 
}); 

export const createUser = async ({name, email, password}:any) => {
  return api.post('/auth/register', {name, email, password} );
};

export const createSession = async({email, password}:any) => {
  return api.post('/auth/login', {email, password});
};

export const getProducts = async () => {
    return api.get('/products');
};


