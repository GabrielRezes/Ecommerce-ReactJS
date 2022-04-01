import React from 'react';

import logo from '../../assets/logo.svg';

import './logo.scss';

export default function Logo () {
  return (
    <div className="container-logo">
      <img className="logo" src={logo}/>
      <h1>EcomMerce</h1>
    </div>
  );
};