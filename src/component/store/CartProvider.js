import React, { useState } from "react";
import CartContext from "./cart-context";
// import axios from "axios";
 

const CartProvider = (props) => {
  const [cartStates, setCartStates] = useState({
    item: [],
    totalAmount: 0,
    totalQuantity: 0,
  });
  const email = localStorage.getItem("email");
  const apiKey = `https://crudcrud.com/api/7c5b23fe7ef949598644dd3bc21949e9/cartData${email}`;
  function getItemFormServer() {
    const email = localStorage.getItem("email");
    fetch(
      `https://crudcrud.com/api/7c5b23fe7ef949598644dd3bc21949e9/cartData${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length >= 0) {
          let refreshedItem = [];
          let refreshedAmount = 0;
          let refreshedQuantity = 0;
          data.forEach((item) => {
            refreshedItem.push(item);
            refreshedQuantity = refreshedQuantity + 1;
            refreshedAmount += item.price * item.quantity;
          });
          setCartStates({
            item: refreshedItem,
            totalAmount: refreshedAmount,
            totalQuantity: refreshedQuantity,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  const addItemToCartHandler = (newItem) => {
    let updatedItem = [...cartStates.item];
    let updatedAmount = cartStates.totalAmount;
    let updatedQuantity = cartStates.totalQuantity;
    const addingItem = async () => {
      updatedQuantity = updatedQuantity + 1;
      updatedAmount = updatedAmount + newItem.price * newItem.quantity;
      const cartItemIndex = cartStates.item.findIndex(
        (item) => item.id === newItem.id
      );
      if (cartItemIndex === -1) {
        try {
          const res = await fetch(`${apiKey}`, {
            method: "POST",
            body: JSON.stringify({
              id: newItem.id,
              title: newItem.title,
              price: newItem.price,
              imageUrl: newItem.imageUrl,
              quantity: newItem.quantity,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          updatedItem = [...updatedItem, data];
          setCartStates({
            item: updatedItem,
            totalAmount: updatedAmount,
            totalQuantity: updatedQuantity,
          });
        } catch (err) {
          console.log(err.message);
        }
      } else {
        console.log(cartStates.item[cartItemIndex]._id);
        const newQuantity = (cartStates.item[cartItemIndex].quantity += 1);
        try {
          console.log('PUT')
          await fetch(`${apiKey}/${cartStates.item[cartItemIndex]._id}`, {
            method: "PUT",
            body: JSON.stringify({
              title: newItem.title,
              price: newItem.price,
              imageUrl: newItem.imageUrl,
              quantity: newQuantity,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          updatedItem[cartItemIndex].quantity = newQuantity;
          setCartStates({
            item: updatedItem,
            totalAmount: updatedAmount,
            totalQuantity: newQuantity,
          });
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    addingItem();
    getItemFormServer();
  };

  const removeItemFromCartHandler = (newItem) => {
    // let updatedItem = [...cartStates.item];
    // let updatedAmount = cartStates.totalAmount;
    // let updatedQuantity = cartStates.totalQuantity
    const id = newItem._id;
    const removingItem = async () => {
      // console.log(id);
      // const cartItemIndex = updatedItem.findIndex(
      //   (item) => item.title === newItem.title
      // );
      // if(updatedItem[cartItemIndex].quantity >= 1){
        console.log("DELETE")
        try {
          const res = await fetch(`${apiKey}/${id}`, {
            method: "DELETE",
          });
          getItemFormServer();
          // updatedAmount = updatedAmount - updatedItem[cartItemIndex].price;
          // updatedItem = updatedItem.filter((item) => item.title !== newItem.title )
          // updatedQuantity = updatedQuantity - 1;
          // setCartStates({item: updatedItem, totalAmount: updatedAmount, totalQuantity: updatedQuantity})
          console.log(res)
        } catch (err) {
          console.log(err);
        }
      //};
      }
    removingItem();
  };

  const cartContext = {
    items: cartStates.item,
    quantity: cartStates.totalQuantity,
    totalPrice: cartStates.totalAmount,
    addItems: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    loginCartItem: getItemFormServer,
    // getEmail: getEmail
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
