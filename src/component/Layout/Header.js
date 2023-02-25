import React, { Fragment, useContext, useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import CartContext from "../store/cart-context";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = (props) => {
  const history = useHistory()
  const loginCtx = useContext(AuthContext)
  const [check, setCheck] = useState(false)
  const cartCtx = useContext(CartContext);
  const noOfCartItem = cartCtx.quantity;
  const location = useLocation()

  useEffect(() => {
  if(location.pathname === '/store') {
    setCheck(true)
  }
  else{
    setCheck(false)
  }
  }, [location.pathname])
  const logoutHandler = () =>{
    loginCtx.logout()
    history.replace('/login')
  }
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            {!loginCtx.isLoggedIn && <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>}
            <li className="nav-item">
              <NavLink to="/contactus" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            {loginCtx.isLoggedIn && <li className="nav-item">
              <NavLink to="/store" className="nav-link">
                Store
              </NavLink>
            </li>}
            {loginCtx.isLoggedIn && <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>}
          </ul>
          {check && <form className="form-inline">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              style={{ alignItems: "center", paddingLeft: "-20%" }}
              type="submit"
              onClick={props.onShowCart}
            >
              Cart <span>{noOfCartItem}</span>
            </button>
          </form>}
        </div>
      </nav>
      <Navbar.Brand className="brand">
        <h1 className="brand">The Generic</h1>
      </Navbar.Brand>
    </Fragment>
  );
};
export default Header;
