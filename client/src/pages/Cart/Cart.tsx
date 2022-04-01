import Title from '../../components/TitlePage/TitlePage';
import CartList from '../../components/CartList/CartList';

import '../../styles/global.scss';

export default function Cart () {
  return (
    <section className="container">
      <Title title="Carrinho"/>
      <CartList/>
    </section>
  );
};