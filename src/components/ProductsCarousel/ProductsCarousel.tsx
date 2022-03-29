import React,  { useState, FC } from 'react';
import Button from '../Button/Button';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import './productsCarousel.scss';

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
];

type PropsAddProduct = {
  addProduct: React.FC;
};

export default function ProductsCarousel ({ addProduct }: PropsAddProduct) {
  const [ currProduct, setCurrProduct ] = useState<number>(0);

  const handleClick = (event: any) => {
    if(event.target.id === 'previous' && currProduct > 0) setCurrProduct(currProduct - 1);
    if(event.target.id === 'next' && currProduct < products.length - 1) setCurrProduct(currProduct + 1);
  };

  return(
    <ul className="container-carousel">
      <div onClick={handleClick} className='btn-products-container'>
        <IoChevronBack className='btn-change-product left' id='previous'/>
        <IoChevronForward className='btn-change-product right' id='next'/>
      </div>
  
      <li className='card-product'>
            <span className='name-product'>{products[currProduct].name}</span>
            <span className='price-product'>{products[currProduct].price}</span>
          <img className='img-product' src={products[currProduct].img}/>
          <Button onClick={() => addProduct(  products[currProduct] )} text="Adicionar ao carrinho" variant='primary'/>
      </li> 
    </ul>
  );
};