import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001' 
}); 

export const getProducts = async () => {
    let url = '/products';
    return api.get(url);
};