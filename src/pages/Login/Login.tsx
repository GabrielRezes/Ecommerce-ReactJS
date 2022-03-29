import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../redux/actions/products';


export default function Login () {

  const dispatch = useDispatch();
  const { cart } = useSelector(store => store)
 
  console.log(cart)

  const addProduct = () => {
    dispatch(addProduct())
  } 

  return (
    <>
      <h1>Login</h1>
      <button onClick={addProduct}>Clique</button>
    </>
  );
};