import React from 'react';
import Button from '../Button';  
import { PropsProductComponent, PropsProduct } from '../../types';
import './products.scss';


export default function Products ({ product, onAdd, onRemove }: PropsProductComponent) {
  return (
      <ul className="products">
        {product.map((product: any, index: number) => {
          return(
            <li className="card-product" key={index}>
              <span className="name-product">{product.name}</span>
              <span className="price-product">{product.price}</span>
              <img className="img-product" src={product.image}/>
              <Button 
                onClick={() => onAdd(product)} 
                text="Adicionar ao carrinho" 
                variant='primary'
              />
            </li>
          );
        })}
      </ul>
  );
};