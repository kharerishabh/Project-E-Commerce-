import { Button } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <li>
      <h2>{props.item.title}</h2>
      <img src={props.item.imageUrl} alt="A Table" />
      <span>
        <h5>$ {props.item.price}</h5>
      </span>
      <span><h6>{props.item.quantity}</h6></span>
      <Button onClick={() => {props.onRemove(props.item)}}>Remove</Button>
    </li>
  );
};
export default CartItem;
