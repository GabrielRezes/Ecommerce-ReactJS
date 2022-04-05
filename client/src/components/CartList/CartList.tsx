import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction, removeProductAction } from '../../redux/actions/products';
import { PropsProduct } from '../../types';

import './cartList.scss';

// type Cart = {
//   cart: PropsProduct[],
// }

export default function CartList () {
  const dispatch = useDispatch();
  const { cart }:any = useSelector(store => store);
  const [ amount, setAmount ] = useState<number>(0);

  useEffect(() => {
    let total = cart.reduce((acc:number, curr:PropsProduct) => {
      let totalSumOfProduct = (Number(curr.price.replace(/[^0-9,]/g, ''))); 
      return acc + totalSumOfProduct;
    }, 0);
    setAmount(total); 
  },[cart])

  return (
    <div className="container-cart">
      <ul className="list">
      <h2> Total: {amount}</h2> 
        {cart.map((product:PropsProduct, index:number) => {
          return (
            <li className="card" key={index}>

              <div className="product">
                <img src={product.img}/>
                <p>{product.name}</p>
              </div>

              <div className="info-product">
                <p className="name-product">{product.price}</p>
                <div className="qnt-product">
                  <button 
                    onClick={() => dispatch(addProductAction(product))} 
                    className="btn"> - 
                  </button>
                  
                    <span>{product.qnt}</span>
                  
                  <button 
                    onClick={() => dispatch(removeProductAction(product))} 
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