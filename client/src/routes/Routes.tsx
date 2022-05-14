import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount'

export default function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/createAccount' element={<CreateAccount/>}/>
    </Routes>
  );
};