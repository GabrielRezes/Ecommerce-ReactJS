import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/actions/products';

import ProductsCarousel from '../../components/ProductsCarousel/ProductsCarousel';
import CardProducts from '../../components/CardProducts/CardProducts';
import TitlePage from '../../components/TitlePage/TitlePage';
import Button from '../../components/Button/Button';


import useSizeWindow from '../../hooks/useSizeWindow';

import './home.scss';

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
];

type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
}

export default function Products () {
  const dispatch = useDispatch();
  const { isMobile } = useSizeWindow()

  const addProductToCart = (product : PropsProduct) => {
    dispatch(addProduct(product));
  };

  return(
    <section className="container-products">
      <TitlePage title="Produtos"/>
      { isMobile 
          ? <ProductsCarousel addProduct={addProductToCart}/>
          : <CardProducts products={products} addProduct={addProductToCart}/>
      }
    </section>
  );
};
