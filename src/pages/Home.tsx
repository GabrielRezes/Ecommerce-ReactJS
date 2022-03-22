import React, { useEffect, useState } from 'react';

// import useSizeWindow from '../hooks/useSizeWindow';
import Button from '../components/Button';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import '../styles/Container.scss'

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/41WyKQBoPoL._AC_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/61vIgEPtSEL._AC_SX679_.jpg'},
]

export default function Home () {

  const [ currProductImage, setCurrProductImage ] = useState<any>(0);
  // const [ size, sizeWindow] = useSizeWindow()

  // console.log(size)

  // useEffect(() => {
  //   let size = SizeWindow()
  //   console.log(size)    
  // },[])


  const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const previousProduct = () => {
    if(currProductImage === 0 ) return;
    setCurrProductImage(currProductImage - 1);
  };

  const nextProduct = () => {
    if(currProductImage === products.length - 1) return;
    setCurrProductImage(currProductImage + 1);
  };

  // console.log(currProductImage);
  // console.log(products.length);

  return (
    <div className='container'>
      <h1 className='title'>PRODUTOS</h1>
        <ul className='container-products'>
          <div className='btn-products'>
            <span onClick={previousProduct} className='btn left'><IoChevronBack/></span>
            <span onClick={nextProduct} className='btn right'><IoChevronForward/></span>
          </div>
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