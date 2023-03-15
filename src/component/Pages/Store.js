import { useContext, useEffect } from "react";
import AvailableProduct from "../Products/AvailableProduct";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";

const Store = () => {
  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(AuthContext);

  const login = loginCtx.isLoggedIn;
  useEffect(() => {
    if (login) {
      cartCtx.loginCartItem();
    }
  }, [login]);
  const addToCartHandler = (item) => {
    // console.log("hello");
    cartCtx.addItems(item);
  };
  return (
    <main>
      <AvailableProduct onAddToCart={addToCartHandler} />
    </main>
  );
};
export default Store;
