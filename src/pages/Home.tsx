import React, { useEffect, useState } from 'react';

import ProductsCarrousel from '../components/ProductsCarrousel';
import Products from '../components/Products'
import useSizeWindow from '../hooks/useSizeWindow';
import Button from '../components/Button';

import '../styles/Products.scss'

export default function Home () {
  const [ sizeWindow ] = useSizeWindow()
  
  const addProduct = () => {
    console.log('oi')
  };

  return (
    <div className='container-page'>
      <h1 className='title'>Produtos</h1>
        <ul className='container-products'>
          {sizeWindow.width && sizeWindow.width < 999 
          ? <ProductsCarrousel addProduct={addProduct}/>
          : <Products addProduct={addProduct}/>}
        </ul> 
    </div>
  );
};