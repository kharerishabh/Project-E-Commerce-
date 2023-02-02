import { useState, useContext } from 'react';
import Header from './component/Layout/Header';
import AvailableProduct from './component/Products/AvailableProduct';
import Cart from './component/Cart/Cart';
import CartProvider from './component/store/CartProvider';
import CartContext from './component/store/cart-context';
import { Route } from 'react-router-dom';
import About from './component/Pages/About';


const App = (props) => {
  const cartCtx = useContext(CartContext)
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) =>{
    event.preventDefault()
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  
  const addToCartHAndler = () =>{
    cartCtx.addItems({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl
    })
  }

  return (
    <>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
    <main>
    <Route exact path="/about">
      <About/>
      </Route> 
      <AvailableProduct onAddToCart={addToCartHAndler}/>
    </main>
    </CartProvider>     
    </>
  );
}

export default App;
