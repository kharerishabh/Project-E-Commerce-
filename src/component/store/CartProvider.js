import React, {useReducer} from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice:0
}
const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedTotalPrice = state.totalPrice + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
          price: existingCartItem.price + action.item.price
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem
    }else{
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalQuantity = state.totalQuantity + 1;

    return {
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
       totalPrice: updatedTotalPrice
    }
  }
  if(action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if(existingItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }else {
      const updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedTotalQuantity = state.totalQuantity - 1;
    return {
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
    }
  }
  return defaultCartState;
}
const CartProvider = (props) => {
  const  [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        quantity: cartState.totalQuantity,
        price: cartState.totalPrice,
        addItems:  addItemToCartHandler ,
        removeItem:  removeItemFromCartHandler ,
      };
      return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
}

export default CartProvider;