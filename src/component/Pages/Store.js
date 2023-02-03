import { useState, useContext } from "react";
import AvailableProduct from "../Products/AvailableProduct";
import CartContext from "../store/cart-context";
import CartProvider from "../store/CartProvider";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";

const Store = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    event.preventDefault();
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addToCartHAndler = () => {
    cartCtx.addItems({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
    });
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailableProduct onAddToCart={addToCartHAndler} />
      </main>
    </CartProvider>
  );
};

export default Store;
