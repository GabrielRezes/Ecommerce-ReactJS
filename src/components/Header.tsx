import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

import logo from '../assets/logo.svg';
import '../styles/Header.scss';

interface SizeWindow {
  width: number,
  height: number,
};

export default function Header () {

  const [ menuOpen, setMenuOpen ] = useState<Boolean>(false);
  const [ size, setSize] = useState<SizeWindow>({ width: 0, height: 0 });

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleSize);
    return () =>  window.removeEventListener('resize', handleSize);
  },[]);

  useEffect(() => {
    if(size.width > 600 && menuOpen) {
      setMenuOpen(false) 
    } 
  }, [size.width, menuOpen]);

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  };


  return (
    <nav className='nav'>
      <img className='logo' src={logo}/>

      <ul className={`${menuOpen ? 'mobileList' : 'list'}`}  onClick={closeMenu}>
        <Link to='/' className='li'>Home</Link>
        <Link to='/Cart' className='li'>Carrinho</Link>
        <Link to='/Login' className='li'>Login</Link>
      </ul>

      <div className='mobileMenu' onClick={closeMenu}>
        { menuOpen ? <BiMenuAltRight/> : <BiMenu/> }
      </div>  

    </nav>
  );
};