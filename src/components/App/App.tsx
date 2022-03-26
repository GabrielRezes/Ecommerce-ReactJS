import AppRoutes from '../../routes/Routes';
import Header from '../Header/Header';

import '../../styles/global.scss';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <AppRoutes/>
    </div>
  );
};

