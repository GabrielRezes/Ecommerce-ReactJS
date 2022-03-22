import React, { useState } from 'react';

import Button from '../components/Button';
import '../styles/Container.scss'

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
  {id: 2, name: 'iphone 9', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
  {id: 3, name: 'iphone 10', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
  {id: 4, name: 'iphone 11', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
  {id: 5, name: 'iphone 12', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
  {id: 6, name: 'iphone 12PRO', price: 'R$ 2.000', img:'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png'},
]

export default function Home () {

  const [ currProductImage, setCurrProductImage ] = useState<any>(0);

  const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

  }

  return (
    <div className='container'>
      <h1 className='title'>PRODUTOS</h1>
        <ul className='container-products'>
          <li className='product'>
            <span className='title-product'>{products[currProductImage].name}</span>
            <span className='title-product'>{products[currProductImage].price}</span>
            <img className='img-product' src={products[currProductImage].img}/>
          </li>
          <Button onClick={addProduct} text="Adicionar ao carrinho" variant='secondary' />
        </ul> 
    </div>
  );
};