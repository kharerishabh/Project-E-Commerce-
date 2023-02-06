import {  useContext } from "react";
import AvailableProduct from "../Products/AvailableProduct";
import CartContext from "../store/cart-context";

const Store = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHAndler = () => {
    console.log('hello')
    cartCtx.addItems({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
    });
  };
  return (
      <main>
        <AvailableProduct onAddToCart={addToCartHAndler} />
      </main>
    
  );
};

export default Store;
