import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/actions/products';

import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import Button from '../Button/Button';
import TitlePage from '../TitlePage/TitlePage';


import useSizeWindow from '../../hooks/useSizeWindow';

import './products.scss';

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
];

export default function Products () {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store);
  const { isMobile } = useSizeWindow()

  let product = {
    name: 'produto1',
    price: 'R$ 1200'

  }

  const addProduct = () => {
    dispatch(addProduct())
  };

  const addProdutcTeste = () => {
    // dispatch(addProduct())
    console.log('oi')
  };

  console.log(cart)

  return(
    <div className="container-products">
      <TitlePage title="Produtos"/>
      
      { isMobile 
          ? <ProductsCarousel addProduct={addProduct}/>
          
          : <ul className="products">
              {products.map((product, index) => {
                return(
                  <li className="card-product" key={index}>
                      <span className="name-product">{product.name}</span>
                      <span className="price-product">{product.price}</span>
                      <img className="img-product" src={product.img}/>
                      <Button onClick={addProdutcTeste} text="Adicionar ao carrinho" variant='primary'/>
                  </li>
                );
              })}
            </ul>
      }
    </div>
  );
};
