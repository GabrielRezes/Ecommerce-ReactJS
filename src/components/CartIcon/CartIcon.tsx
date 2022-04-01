import React from 'react';
import { useSelector } from 'react-redux';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './cartIcon.scss';

export default function CartIcon () {
  const { cart } = useSelector(store => store);
  const navigate = useNavigate();

  const toCart = () => {
    navigate('./cart');
  };

  return (
    <div className="container-cart" onClick={toCart}> 
        <span>{cart.length}</span>
        <RiShoppingCart2Fill style={{ color: "#0E0E0F", fontSize: "40px"}}/>
    </div>   
  );
};