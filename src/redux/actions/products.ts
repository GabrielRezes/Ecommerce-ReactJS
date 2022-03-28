// interface ProductProps {
//   product: {
//     name: 'string',  
//     price: 'string'
//   }
// }

const addProduct = () => {
  return {
    type: 'ADD_PRODUCT',
    payload: 1 + 2
  }
}

const removeProduct = () => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: 1 + 2
  }
} 

export {
  addProduct,
  removeProduct
};
