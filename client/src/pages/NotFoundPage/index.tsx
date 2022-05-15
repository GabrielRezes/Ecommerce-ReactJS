import { useNavigate } from 'react-router-dom';

export default function NotFoundPage () {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Página não encontrada!</h1>
      <span onClick={() => navigate('/')}>Clique aqui para voltar a página inicial</span>
    </div>  
  );
};