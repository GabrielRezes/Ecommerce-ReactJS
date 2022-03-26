import Button from '../Button/Button';
import './products.scss';

const products = [
  {id: 1, name: 'iphone 8', price: 'R$ 2.000', img:'https://m.media-amazon.com/images/I/516LM9NTSfL._AC_SY879_.jpg'},
  {id: 2, name: 'iphone 9', price: 'R$ 3.999', img:'https://m.media-amazon.com/images/I/610D42wRbWL._AC_SX679_.jpg'},
  {id: 3, name: 'iphone 10', price: 'R$ 4.999', img:'https://m.media-amazon.com/images/I/41WyKQBoPoL._AC_.jpg'},
  {id: 4, name: 'iphone 11', price: 'R$ 5.999', img:'https://m.media-amazon.com/images/I/61vIgEPtSEL._AC_SX679_.jpg'},
];

interface addProductProps {
  addProduct: () => void
}

export default function ProductsDefault ({ addProduct } : addProductProps) {
  return(
    <>
      { products.map((product, index) => {
        return(
          <li className="card-product" key={index}>
            <span className='title-product'>{product.name}</span>
            <span className='title-product'>{product.price}</span>
            <img className='img-product' src={product.img}/>
            <Button onClick={addProduct} text="Adicionar ao carrinho" variant='secondary'/>
          </li>  
        );
      })}
    </>  
  );
};