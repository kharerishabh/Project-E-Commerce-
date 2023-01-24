import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const cartElements = [
  {
    id: 'm-1',
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 'm-2',
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 'm-3',
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const Cart = (props) => {
  const Elements = (
    <ul className={classes["cart-ele"]}>
      {cartElements.map((element) => (
        <li key={element.id}>
        <h2>{element.title}</h2>
        <img src={element.imageUrl} alt='A Table'/>
        <span><h6>$ {element.price}</h6></span>
        <span>{element.quantity}</span>
       </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {Elements}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Remove</button>
      </div>
    </Modal>
  );
};

export default Cart;
