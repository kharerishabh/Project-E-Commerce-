import React, { Fragment, useContext } from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import CartContext from "../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

   const noOfCartItem = cartCtx.quantity;
   

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Store
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <button className="btn btn-outline-success my-2 my-sm-0"
              style={{alignItems: 'center', paddingLeft: '-20%'}}
              type="submit" onClick={props.onShowCart}
            >Cart <span>{noOfCartItem}</span></button>
          </form>
        </div>
      </nav>
      <Navbar.Brand className="brand" >
        <h1 className="brand">The Generic</h1>
      </Navbar.Brand>
    </Fragment>
  );
}
export default Header;
