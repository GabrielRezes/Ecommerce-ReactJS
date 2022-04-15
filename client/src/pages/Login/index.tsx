import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import TitlePage from '../../components/TitlePage';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { createSession } from '../../services/api';

import { validateEmail, validatePassword } from '../../utils/index';

export default function Login () {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ error, setError ] = useState<boolean>(false);

  const navigate = useNavigate();


  const handleLogin =  async () => {

    let userEmail = email.trim().toLocaleLowerCase();
    let userPassword = password.trim();

    console.log('email', email)
    console.log('password', password)

    if(!userEmail || !userPassword) {
      return alert ('Preencha os dados corretamente!')
    }
    
    try {
      const response = await createSession(userEmail, userPassword);
      console.log(response.data)
    } catch (err) {
      console.log('error')
      setError(true);
    } finally {
      return console.log('deu certo')
    }

    // let userEmail = validateEmail(email);
    // let userPassword = validatePassword(password);

    // if(!userEmail || !userPassword) {
    //   return alert('Informe um email válido');
    // }

    // if(!userPassword) {
    //   console.log('deu erro')
    //   return alert (`
    //     A senha deve conter:
    //     - Mínimo de oito caracteres
    //     - Mínimo de um número
    //     - Mínimo de um caractere especial
    //     - Mínimo de uma letra maiúscula
    //   `)
    // }



  }

  return (
    <section className='container'>
      <TitlePage title='Login'/>

      <div className='container-input'>
        <Input labelText='Email' inputName='email' inputType='email' value={email} setValue={setEmail}/>
        <Input labelText='Senha' inputName='password' inputType='password' value={password} setValue={setPassword}/>
      </div>  

        <Button text='Entrar' variant='primary' onClick={handleLogin}/>
        <Button text='Cadastrar' variant='primary' onClick={() => navigate('./register')}/>
    </section>
  );
};