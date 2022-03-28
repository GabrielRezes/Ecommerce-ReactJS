import React, { useState } from 'react';
import Button from '../Button/Button';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import './productsCarousel.scss';

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/41WyKQBoPoL._AC_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/61vIgEPtSEL._AC_SX679_.jpg'},
];

interface addProductProps {
  addProduct: () => void
}

export default function ProductsCarousel ({ addProduct }: addProductProps) {
  const [ currProductImage, setCurrProductImage ] = useState<number>(0);

  const handleClick = (event: any) => {
    if(event.target.id === 'previous' && currProductImage > 0) setCurrProductImage(currProductImage - 1);
    if(event.target.id === 'next' && currProductImage < products.length - 1) setCurrProductImage(currProductImage + 1);
  }

  return(
    <ul className="container-carousel">
      <div onClick={handleClick} className='btn-products-container'>
        <IoChevronBack className='btn-change-product left' id='previous'/>
        <IoChevronForward className='btn-change-product right' id='next'/>
      </div>
  
      <li className='card-product'>
            <span className='name-product'>{products[currProductImage].name}</span>
            <span className='price-product'>{products[currProductImage].price}</span>
          <img className='img-product' src={products[currProductImage].img}/>
          <Button onClick={addProduct} text="Adicionar ao carrinho" variant='primary'/>
      </li> 
    </ul>
  );
};