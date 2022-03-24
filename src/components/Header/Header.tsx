import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSizeWindow from '../../hooks/useSizeWindow';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

import logo from '../../assets/logo.svg';
import '../../styles/Header.scss';

interface SizeWindow {
  width: number,
  height: number,
};

export default function Header () {
  const [ isMobile, setIsMobile ] = useState<Boolean>(false);
  const [ sizeWindow ] = useSizeWindow();

  useEffect(() => {
    if(sizeWindow.width && sizeWindow.width > 600 && isMobile) {
      setIsMobile(false) 
    } 
  }, [sizeWindow.width, isMobile]);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile)
  };

  return (
    <nav className="nav">
      <img className="logo" src={logo}/>

      <ul className={`${isMobile ? "mobileList" : "list"}`}  onClick={isMobile ? handleMobileMenu : () => {}}>
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