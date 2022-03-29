type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
}

const addProduct = (product : PropsProduct) => {

  console.log('Na ACTION:', product)

  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

const removeProduct = (product : PropsProduct) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product
  }
} 

export {
  addProduct,
  removeProduct
};
