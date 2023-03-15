import React from "react";

const CartContex = React.createContext({
    items: [],
    quantity: 0,
    totalPrice: 0,
    addItems: (item) => {},
    removeItem: (newItem) => {},
    loginCartItem: (item) => {}
})
export default CartContex;