import React from "react";

const CartContext = React.createContext({
    items: [],
    quantity: 0,
    price:0,
    addItems: (item) => {},
    removeItem: (id) => {}
})
export default CartContext;