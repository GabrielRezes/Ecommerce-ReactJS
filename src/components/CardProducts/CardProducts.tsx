import React from 'react';
import Button from '../Button/Button';  
import { PropsProduct } from '../../types';
import './cardProducts.scss';

export default function CardProducts (props:any) {

  console.log(props)
  return (
      <ul className="products">
        {props.products.map((product, index) => {
          return(
            <li className="card-product" key={index}>
              <span className="name-product">{product.name}</span>
              <span className="price-product">{product.price}</span>
              <img className="img-product" src={product.img}/>
              <Button onClick={() => addProductToCart(product)} text="Adicionar ao carrinho" variant='primary'/>
              </li>
          );
        })}
      </ul>
  );
};