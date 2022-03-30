import React from 'react';
import Button from '../Button/Button';  
import { PropsProduct } from '../../types';
import './products.scss';

type PropsProductComponent = {
  add: React.MouseEventHandler<HTMLButtonElement>;
  products: PropsProduct[]
};

export default function Products ({ add, products }: any) {
  return (
      <ul className="products">
        {products.map((product:any, index:any) => {
          return(
            <li className="card-product" key={index}>
              <span className="name-product">{product.name}</span>
              <span className="price-product">{product.price}</span>
              <img className="img-product" src={product.img}/>
              <Button onClick={() => add(product)} text="Adicionar ao carrinho" variant='primary'/>
            </li>
          );
        })}
      </ul>
  );
};