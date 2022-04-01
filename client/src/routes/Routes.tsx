import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';

export default function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
};