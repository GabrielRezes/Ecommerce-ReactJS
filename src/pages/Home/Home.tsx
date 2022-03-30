import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/actions/products';

import ProductsCarousel from '../../components/ProductsCarousel/ProductsCarousel';
import TitlePage from '../../components/TitlePage/TitlePage';
import Products from '../../components/Products/Products';

import { PropsProduct } from '../../types';
import { productList } from '../../mocks/products';
import useSizeWindow from '../../hooks/useSizeWindow';

import './home.scss';

export default function Home () {
  const dispatch = useDispatch();
  const { isMobile } = useSizeWindow()

  const addProductToCart = (product : PropsProduct) =>  {
    console.log(product)
    dispatch(addProduct(product));
  };

  return(
    <section className="container-products">
      <TitlePage title="Produtos"/>
      { isMobile 
          ? <ProductsCarousel products={productList} add={addProductToCart}/>
          : <Products products={productList} add={addProductToCart}/>
      }
    </section>
  );
};
