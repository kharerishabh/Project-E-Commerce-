import React, { useContext } from "react";
// import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (newItem) => {
     cartCtx.removeItem(newItem);
  };
  
  const Elements = (
    <ul className={classes["cart-ele"]}>
      {cartCtx.items.map((element) => (
        <CartItem
          key={Math.random().toString()}
          item={element}
          onRemove={cartItemRemoveHandler.bind(null, element)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {Elements}
      <span>Total Price - {cartCtx.totalPrice}</span>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        
      </div>
    </Modal>
  );
};

export default Cart;
