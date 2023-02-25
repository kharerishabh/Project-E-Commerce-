import { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Fotter from "./component/Layout/Fotter";
import AboutUs from "./component/Pages/About";
import Home from "./component/Pages/Home";
import Store from "./component/Pages/Store";
import Header from './component/Layout/Header';
import Cart from './component/Cart/Cart'
import CartProvider from "./component/store/CartProvider";
import ContactUs from "./component/Pages/ContactUs";
import ProductDetails from "./component/Pages/ProductDetails";
import { ProductContextProvider } from "./component/store/product-context";
import Login from "./component/auth/Login";
import AuthContext from "./component/store/auth-context";


const App = (props) => {
  const loginCtx = useContext(AuthContext)
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    event.preventDefault()
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  async function submitHandler (users) {
    const response = await fetch('https://e-commerce-react-original-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: {
            "Content-Type": "application.json",
          },
    })
    const data = await response.json();
    console.log(data);
}
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Switch>
          <ProductContextProvider>
          <Route path="/" exact> 
            <Redirect to="/home"/>
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/contactus">
          <ContactUs onAddUser={submitHandler}/>
        </Route>
        <Route path="/store" exact>
          {loginCtx.isLoggedIn && <Store />}
          {!loginCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path="/store/:productId">
          <ProductDetails/>
        </Route>  
        </ProductContextProvider>      
        </Switch>
      </main>
      <Fotter/>
    </CartProvider>
  );
};

export default App;
