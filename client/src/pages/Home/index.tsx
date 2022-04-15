import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductToCart } from '../../redux/actions/cartActions';
import { setProducts, setLoading } from '../../redux/actions/productActions';

import ProductsCarousel from '../../components/ProductsCarousel';
import TitlePage from '../../components/TitlePage';
import Products from '../../components/Products';

import { PropsProduct } from '../../types';
import { productList } from '../../mocks/products';
import useSizeWindow from '../../hooks/useSizeWindow';

import { getProducts } from '../../services/api';

import '../../styles/global.scss';

export default function Home () {
  const [ error, setError ] = useState<boolean>(false);
  const { products }: any = useSelector(store => store);
  
  const dispatch = useDispatch();
  const { isMobile } = useSizeWindow()

  useEffect(() => document.title = 'Ecommerce', [])

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log(err)
      setError(true);
    } finally {
      dispatch(setLoading(false));
    };
  };

  useEffect(() => {
    if(!products.catalog.length) {
      loadProducts();
    }
  }, [products.catalog]);


  const handleAddProduct = (product : PropsProduct) =>  {
    dispatch(addProductToCart(product));
  };

  const handleRemoveProduct = (product: PropsProduct) => {
    dispatch(removeProductToCart(product));
  };

  if(error) {
    return <div className='error'>Erro ao recuperar dados</div>
  }

  if(products.isLoadingProducts) {
    return <div className='loading'>Carregando...</div>
  }

  return(
    <section className="container">
      <TitlePage title="Produtos"/>
      { isMobile 
          ? <ProductsCarousel 
              product={products.catalog} 
              onAdd={handleAddProduct}
              onRemove={handleRemoveProduct}
            />
          : <Products 
              product={products.catalog} 
              onAdd={handleAddProduct}
              onRemove={handleRemoveProduct}
            />
      }
    </section>
  );
};
