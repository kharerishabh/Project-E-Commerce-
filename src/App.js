import { Fragment, useState } from 'react';
import Header from './component/Layout/Header';
import AvailableProduct from './component/Products/AvailableProduct';
 import Cart from './component/Cart/Cart';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) =>{
    event.preventDefault()
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <AvailableProduct/>
    </main>
    </Fragment>
  );
}

export default App;
