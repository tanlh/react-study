import Cart from 'components/Cart/Cart';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { CartProvider } from './store/cart-context';

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showCartHandler = () => {
    setShowingCart(true);
  };

  const hideCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <CartProvider>
      {showingCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
