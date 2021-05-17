import { useSelector } from 'react-redux';

import Header from 'components/Header';
import Auth from 'components/Auth';
import UserProfile from 'components/UserProfile';
import Counter from './components/Counter';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
