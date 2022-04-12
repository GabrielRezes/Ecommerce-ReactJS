import React,  { useState, FC } from 'react';

import Button from '../Button';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { PropsProductComponent } from '../../types';
import './productsCarousel.scss';


export default function ProductsCarousel ({ products, onAdd, onRemove }: PropsProductComponent) {
  const [ currProduct, setCurrProduct ] = useState<number>(0);

  const handleClick = (event: any) => {
    if(event.target.id === 'previous' && currProduct > 0) return setCurrProduct(currProduct - 1);
    if(event.target.id === 'next' && currProduct < products.length - 1) return setCurrProduct(currProduct + 1);
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
          <Button 
            onClick={() => onAdd(products[currProduct])} 
            text="Adicionar ao carrinho" 
            variant='primary'
          />
      </li> 
    </ul>
  );
};