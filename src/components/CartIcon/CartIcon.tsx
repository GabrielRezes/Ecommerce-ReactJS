import React from 'react';

import { RiShoppingCart2Fill } from 'react-icons/ri';

export default function CartIcon () {
  return (
    <div className="container-cart">
        <span></span>
        <RiShoppingCart2Fill style={{ color: "#0E0E0F", fontSize: "40px"}}/>
    </div>   
  );
};