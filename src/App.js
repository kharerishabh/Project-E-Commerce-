import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Fotter from "./component/Layout/Fotter";
import AboutUs from "./component/Pages/About";
import Home from "./component/Pages/Home";
import Store from "./component/Pages/Store";
import Header from './component/Layout/Header';
import Cart from './component/Cart/Cart'
import CartProvider from "./component/store/CartProvider";
import ContactUs from "./component/Pages/ContactUs";

const App = (props) => {
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
          <Route path="/" exact> 
            <Redirect to="/home"/>
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <ContactUs onAddUser={submitHandler}/>
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        </Switch>
      </main>
      <Fotter/>
    </CartProvider>
  );
};

export default App;
