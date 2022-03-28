import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSizeWindow from '../../hooks/useSizeWindow';

import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import './header.scss';



export default function Header () {
  const [ showMenu, setShowMenu ] = useState<boolean>(false);
  const { isMobile }   = useSizeWindow();  

  useEffect(() => {!isMobile && (setShowMenu(false));
  }, [isMobile]);

  const handleShowMenu = () => {setShowMenu(!showMenu)};

  return (
    <nav className="nav">
      <Logo/>    
      { isMobile 
        ?
            <>
            <div className="iconMobileMenu" onClick={handleShowMenu}>
              { showMenu ? <BiMenuAltRight/> : <BiMenu/> }
            </div>  

            { showMenu &&
              <ul className="mobile-list" onClick={handleShowMenu}>
                <CartIcon/>
                <Link to='/' className="li">Home</Link>
                <Link to='/Cart' className="li">Carrinho</Link>
                <Link to='/Login' className="li">Login</Link>
              </ul>
            }
          </>  
        :
          <ul className="list">
            <CartIcon/>
            <Link to='/' className="li">Home</Link>
            <Link to='/Cart' className="li">Carrinho</Link>
            <Link to='/Login' className="li">Login</Link>
          </ul>
      }
    </nav>
  );
};