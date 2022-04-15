import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001' 
}); 

export const createSession = async(email:any, password:any) => {
  return api.post('/auth/login', {email, password});
};

export const getProducts = async () => {
    return api.get('/products');
};

