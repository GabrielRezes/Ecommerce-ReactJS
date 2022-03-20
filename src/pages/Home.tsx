import React from 'react';

import '../styles/Container.scss'

const products = [
  {id: 1, name: 'iphone 8', img:'./'},
  {id: 2, name: 'iphone 9', img:'./'},
  {id: 3, name: 'iphone 10', img:'./'},
  {id: 4, name: 'iphone 11', img:'./'},
  {id: 5, name: 'iphone 12', img:'./'},
  {id: 6, name: 'iphone 12PRO', img:'./'},
]

export default function Home () {
  return (
    <div className='container'>
      <h1>PRODUTOS</h1>
      <div className='container-products'>
        {products.map(product => {
          return (
          <ul className='card-products'>
            <li>product.name</li>
            <li>product.img</li>
          </ul>
          )
        }) }
      </div>
    </div>
  );
};