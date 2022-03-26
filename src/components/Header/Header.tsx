import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSizeWindow from '../../hooks/useSizeWindow';

import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import './header.scss';



export default function Header () {
  const [ isMobile, setIsMobile ] = useState<boolean>(false);
  const [ sizeWindow ] = useSizeWindow();

  useEffect(() => {
    if(sizeWindow.width && sizeWindow.width > 700 && isMobile) setIsMobile(false);
    return; 
  }, [sizeWindow.width, isMobile]);

  const handleMobileMenu = () => {setIsMobile(!isMobile)};

  return (
    <nav className="nav">
      <Logo/>    
      <ul className={`${isMobile ? "mobileList" : "list"}`}  onClick={isMobile ? handleMobileMenu : () => {}}>
        <CartIcon/>
        <Link to='/' className="li">Home</Link>
        <Link to='/Cart' className="li">Carrinho</Link>
        <Link to='/Login' className="li">Login</Link>
      </ul>
      <div className="iconMobileMenu" onClick={handleMobileMenu}>
        { isMobile ? <BiMenuAltRight/> : <BiMenu/> }
      </div>  
    </nav>
  );
};