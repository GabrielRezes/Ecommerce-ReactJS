import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import TitlePage from '../../components/TitlePage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Status from '../../components/Status'; 

import { createUser } from '../../services/api'; 

export default function CreateAccount () {

  const navigate = useNavigate();

  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [ status, setStatus ] = useState({
    type: '',
    message: ''
  });

  const validateData = () => {
    if(!user.name) {
      setStatus({type:'error', message: 'Necessário preencher o campo nome!'});
      return false 
    } 
    if(!user.email) {
      setStatus({type:'error', message: 'Necessário preencher o campo email!'});
      return false
    } 
    if(!user.password) {
      setStatus({type:'error', message: 'Necessário preencher o campo senha!'});
      return false
    }  
    if(!user.confirmPassword) { 
      setStatus({type:'error', message: 'Necessário preencher o campo senha novamente!'});
      return false
    }  
    if(user.password.length < 6) {
      setStatus({type:'error', message: 'A senha precisa ter no mínimo 6 caracteres!'});
      return false
    }  
    if(user.password !== user.confirmPassword) {
      setStatus({type:'error', message: 'As senhas não conferem'})
      return false
    }  

    return true;
  };

  const handleChangeInputValue = (event:any) => {
     setUser({
       ...user,
       [event.target.name]: event.target.value
     });
  };

  const createAccount = async (event:any) => {
    event.preventDefault();
    
    const isValid = validateData();
    isValid ? postUser() : '';
  }
  
  const postUser =  async () => {
    try{
      const response = await createUser(user);
      console.log(response)
      setUser({name:'',email:'',password:'',confirmPassword:''})
      setStatus({type:'success', message:'Usuário criado com Sucesso! Você será redirecionado para a página de Login'})
      
      setTimeout(() => navigate('/login'),4000)

    } catch (err) {
      console.log(err)
      setStatus({type:'error', message: 'Ocorreu um erro ao criar a conta, tente mais tarde!'});

    } finally {
      return console.log(status)
    }
  }  

  return (
    <section className='container'>
      <TitlePage title='Crie sua Conta'/>


      <div className='container-input'>
        <Input labelText='Nome' inputName='name' inputType='text' value={user.name} setValue={handleChangeInputValue}/>
        <Input labelText='Email' inputName='email' inputType='email' value={user.email} setValue={handleChangeInputValue}/>
        <Input labelText='Senha' inputName='password' inputType='password' value={user.password} setValue={handleChangeInputValue}/>
        <Input labelText='Confirme a senha' inputName='confirmPassword' inputType='password' value={user.confirmPassword} setValue={handleChangeInputValue}/>
      </div>
      {status.type === 'error' && <Status text={status.message} type={status.type}/>}
      {status.type === 'success' && <Status text={status.message} type={status.type}/>}
        
      <Button text='Entrar' variant='primary' onClick={createAccount}/>
    </section>
  );
};