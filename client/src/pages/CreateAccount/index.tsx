import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import TitlePage from '../../components/TitlePage';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { createUser } from '../../services/api'; 

import { Toaster, toast } from 'react-hot-toast';

export default function CreateAccount () {

  const navigate = useNavigate();

  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateData = () => {
    if(!user.name) {
      toast.error('Necessário preencher o campo nome!')
      return false 
    } 
    if(!user.email) {
      toast.error('Necessário preencher o campo email!')
      return false
    } 
    if(!user.password) {
      toast.error('Necessário preencher o campo senha!')
      return false
    }  
    if(!user.confirmPassword) { 
      toast.error('Necessário preencher o campo senha novamente!')
      return false
    }  
    if(user.password.length < 6) {
      toast.error('A senha precisa ter no mínimo 6 caracteres!')
      return false
    }  
    if(user.password !== user.confirmPassword) {
      toast.error('As senhas não conferem!')
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
    isValid && postUser();
  };
  
  const postUser =  async () => {
    try{
      const response = await createUser(user);
      console.log(response);
      toast.success('Usuário criado com Sucesso! Você será redirecionado para a página de Login');
      setTimeout(() => navigate('/login'),4000);

    } catch (err) {
      console.log(err);
      toast.success('Ocorreu um erro ao criar a conta, tente mais tarde!');
      setUser({name: '', email: '', password: '', confirmPassword: ''});
    };
  };

  return (
    <section className='container'>
      <div><Toaster position="top-center" reverseOrder={false}/></div>

      <TitlePage title='Crie sua Conta'/>

      <div className='container-input'>
        <Input labelText='Nome' inputName='name' inputType='text' value={user.name} setValue={handleChangeInputValue}/>
        <Input labelText='Email' inputName='email' inputType='email' value={user.email} setValue={handleChangeInputValue}/>
        <Input labelText='Senha' inputName='password' inputType='password' value={user.password} setValue={handleChangeInputValue}/>
        <Input labelText='Confirme a senha' inputName='confirmPassword' inputType='password' value={user.confirmPassword} setValue={handleChangeInputValue}/>
      </div>
        
      <Button text='Entrar' variant='primary' onClick={createAccount}/>
    </section>
  );
};