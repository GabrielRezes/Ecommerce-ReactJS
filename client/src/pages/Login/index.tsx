import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import TitlePage from '../../components/TitlePage';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { createSession } from '../../services/api';

import { Toaster, toast } from 'react-hot-toast';
import { validateEmail, validatePassword } from '../../utils/index';

export default function Login () {

  const navigate = useNavigate();

  const [ user, setUser ] = useState({
    email: '',
    password: '',
  });

  const [ status, setStatus ] = useState({
    type: '',
    message: ''
  });

  const handleChangeInputValue = (event:any) => {
     setUser({
       ...user,
       [event.target.name]: event.target.value
     });
  };

  const validadeData = () => {
    if(!user.email) return setStatus({type:'error', message: 'Necessário preencher o campo email!'});
    if(!user.password) return setStatus({type:'error', message: 'Necessário preencher o campo senha!'});
    return true;
  };

  const login = async (event:any) => {
    event.preventDefault();

    if(!validadeData()) return;

    try {
      const { data } = await createSession(user);

      if(data) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
      }

      setUser({email:'',password:''});
      setStatus({type:'success', message:'Login com Sucesso!'});

      toast.success('Login com Sucesso!');

      setTimeout(() => {navigate('/')}, 2000);
      
    } catch (err) {
      setStatus({type:'error', message: 'Ocorreu um erro ao realizar o Login!'});

      toast.error('Ocorreu um erro ao realizar o Login!');
    };
  };

  return (
    <section className='container'>
      <div><Toaster position="top-center" reverseOrder={false}/></div>

      <TitlePage title='Login'/>

      <div className='container-input'>
        <Input labelText='Email' inputName='email' inputType='email' value={user.email} setValue={handleChangeInputValue}/>
        <Input labelText='Senha' inputName='password' inputType='password' value={user.password} setValue={handleChangeInputValue}/>
      </div>  
          <span onClick={() => navigate('/createAccount')}>Clique aqui para criar uma conta</span>
        <Button text='Entrar' variant='primary' onClick={login}/>
    </section>
  );
};