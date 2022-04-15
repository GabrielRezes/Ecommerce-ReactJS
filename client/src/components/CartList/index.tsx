import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductToCart } from '../../redux/actions/cartActions';
import Button from '../Button';
import { PropsProduct } from '../../types';

import './cartList.scss';

export default function CartList () {

  const dispatch = useDispatch();
  const { cart }: any = useSelector(store => store);
  const [ amount, setAmount ] = useState<number>(0);

  useEffect(() => {
    let total = cart.products.reduce((acc:number, curr:PropsProduct) => {
       return curr.qnt * curr.price + acc;
      }, 0).toLocaleString('pt-br',{currency: 'BRL'});

    setAmount(total); 
  },[cart.products]);


  if(!cart.products.length) {
    return <div className='error'>Seu carrinho esta vazio!</div>
  };

  return (
    <div className="container-cart">
      <ul className="list">
        <span className='container-amount'>
          <h2 className='amount'> Total:  R$ {amount}</h2> 
          <Button text='Finalizar Compra' variant='secondary' onClick={() => {}}/>
        </span>
        {cart.products.map((product:PropsProduct, index:number) => {
          return (
            <li className="card" key={index}>

              <div className="product">
                <img src={product.image}/>
                <p>{product.name}</p>
              </div>

              <div className="info-product">
                <p className="name-product">{product.price}</p>
                <div className="qnt-product">
                  <button 
                    onClick={() => dispatch(removeProductToCart(product))} 
                    className="btn"> - 
                  </button>
                  
                    <span>{product.qnt}</span>
                  
                  <button 
                    onClick={() => dispatch(addProductToCart(product))} 
                    className="btn"> + 
                  </button>
                </div>  
              </div>
            </li> 
          )
        })}
      </ul>
    </div>
  );
};