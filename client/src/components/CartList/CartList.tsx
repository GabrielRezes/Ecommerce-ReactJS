import { useSelector } from 'react-redux';

import './cartList.scss';

export default function CartList () {
  const { cart }:any = useSelector(store => store);

  return (
    <div className="container-cart">
      <ul className="list">
        {cart.map((product:any, index:any) => {
          return (
            <li className="card" key={index}>

              <div className="product">
                <img src={product.img}/>
                <p>{product.name}</p>
              </div>

              <div className="info">
                <p>{product.price}</p>  
                <span className="total">{}</span>
              </div>

            </li>
          )
        })}
      </ul>
    </div>
  );
};