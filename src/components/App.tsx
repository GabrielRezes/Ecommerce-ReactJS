import AppRoutes from '../components/Routes';
import Header from './Header';

import '../styles/Global.scss';

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <AppRoutes/>
    </div>
  );
};

