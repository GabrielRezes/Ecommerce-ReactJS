import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './cartIcon.scss';

export default function CartIcon () {
  const { cart }: any  = useSelector(store => store);
  const [ totalProducts, setTotalProducts ] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {

    if(cart.products.length){
      let total = cart.products.reduce((acc: any, cur: any) => {
        return acc + cur.qnt;
      },0);

      setTotalProducts(total);
    }
  }, [cart]);

  return (
    <div className="container-cart-icon" onClick={() => navigate('./cart')}> 
        <span>{totalProducts}</span>
        <RiShoppingCart2Fill style={{ color: "#0E0E0F", fontSize: "40px"}}/>
    </div>   
  );
};