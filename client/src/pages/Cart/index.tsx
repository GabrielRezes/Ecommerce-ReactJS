import { useEffect } from 'react';

import Title from '../../components/TitlePage';
import CartList from '../../components/CartList';

import '../../styles/global.scss';

export default function Cart () {
  
  useEffect(() => document.title = 'Carrinho', [])

  return (
    <section className="container">
      <Title title="Carrinho"/>
      <CartList/>
    </section>
  );
};