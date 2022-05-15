import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Login from '../pages/Login';
import AdmUser from '../pages/AdmUser';
import NotFoundPage from '../pages/NotFoundPage';
import CreateAccount from '../pages/CreateAccount'

export default function AppRoutes () {

  const { userInfo }:any = useSelector(store => store);

  const PrivateRoute = ({children}:any) => {
    if(!userInfo.id) {
      return <Navigate to='/'/>
    } 
    return children;
  }

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/createAccount' element={<CreateAccount/>}/>
      <Route path='/admUser' element={<PrivateRoute><AdmUser/></PrivateRoute>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
};