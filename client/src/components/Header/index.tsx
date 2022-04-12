import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../CartIcon';
import Logo from '../Logo';

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import useSizeWindow from '../../hooks/useSizeWindow';
import './header.scss';


export default function Header () {
  const [ showMenu, setShowMenu ] = useState<boolean>(false);
  const { isMobile }   = useSizeWindow();  

  useEffect(() => {!isMobile && setShowMenu(false);}, [isMobile]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <nav className="nav">
      <Logo/>    
        <div className="mobile">
          <div className="iconMobileMenu" onClick={handleShowMenu}>
            { showMenu ? <BiMenuAltRight/> : <BiMenu/> }
          </div>  

          { showMenu &&
            <ul className="mobile-list" onClick={handleShowMenu}>
              <CartIcon/>
              <Link to='/' className="li">Home</Link>
              <Link to='/cart' className="li">Sobre</Link>
              <Link to='/login' className="li">Login</Link>
            </ul>
          }
        </div>

        <div className="no-mobile">
          <ul className="list">
            <CartIcon/>
            <Link to='/' className="li">Home</Link>
            <Link to='/Cart' className="li">Sobre</Link>
            <Link to='/Login' className="li">Login</Link>
          </ul>
        </div>  
    </nav>
  );
};