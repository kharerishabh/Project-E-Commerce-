import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import classes from "./Avaliable.module.css";

const Product_Arr = [
  {
    id: "m1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "m2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "m3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "m4",
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProduct = () => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartCtx.addItems({ id: item.id, imageUrl: item.imageUrl, title: item.title, price: item.price, quantity: 1});
  }

  const items = Product_Arr.map((item) => (
    <li key={item.id}>
      <h2>{item.title}</h2>
      <img src={item.imageUrl} alt="A Table" />
      <span>
        `${item.price}`{" "}
        <Button
          onClick={addItemHandler.bind(null, item)}
          className="btn"
        >
          Add To Cart
        </Button>
      </span>
    </li>
  ));
  return (
    <section className={classes.product}>
      <h2>Music</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default AvailableProduct;
