import React from 'react';
import ProductsCarrousel from './ProductsCarrousel';
import ProductsDefault from './ProductsDefault';
import useSizeWindow from '../../hooks/useSizeWindow';

import '../../styles/Products.scss';

export default function Products () {
  const [ sizeWindow ] = useSizeWindow()

  const addProduct = () => {
    console.log('Add');
  };

  return(
    <div className='container-page'>
      <h1 className='title'>Produtos</h1>
        <ul className='container-products'>
          {sizeWindow.width && sizeWindow.width < 999 
          ? <ProductsCarrousel addProduct={addProduct}/>
          : <ProductsDefault addProduct={addProduct}/>}
        </ul> 
    </div>
  );
};