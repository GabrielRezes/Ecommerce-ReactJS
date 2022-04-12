import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAction, removeProductAction } from '../../redux/actions/products';

import ProductsCarousel from '../../components/ProductsCarousel';
import TitlePage from '../../components/TitlePage';
import Products from '../../components/Products';

import { PropsProduct } from '../../types';
import { productList } from '../../mocks/products';
import useSizeWindow from '../../hooks/useSizeWindow';

import '../../styles/global.scss';

export default function Home () {
  const dispatch = useDispatch();
  const { isMobile } = useSizeWindow()

  useEffect(() => document.title = 'Ecommerce', [])


  const handleAddProduct = (product : PropsProduct) =>  {
    dispatch(addProductAction(product));
  };

  const handleRemoveProduct = (product: PropsProduct) => {
    dispatch(removeProductAction(product));
  };

  return(
    <section className="container">
      <TitlePage title="Produtos"/>
      { isMobile 
          ? <ProductsCarousel 
              products={productList} 
              onAdd={handleAddProduct}
              onRemove={handleRemoveProduct}
            />
          : <Products 
              products={productList} 
              onAdd={handleAddProduct}
              onRemove={handleRemoveProduct}
            />
      }
    </section>
  );
};
