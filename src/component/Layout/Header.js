import React from "react";
import { Button, Navbar} from "react-bootstrap";
import AvailableProduct from "../AvailableProduct/AvailableProduct";
import classes from './Header.module.css'

const Header = () =>{
    return (
        <>
        <Navbar bg="dark" expand='sm' variant='dark'>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/">Store</Navbar.Brand>
            <Navbar.Brand href="/">About</Navbar.Brand>
            <Button>Cart</Button>
        </Navbar>
        <div>
        <header className={classes.header}>
           <h1>The Generic</h1>
            </header>
        </div>
        <AvailableProduct/>
        </>
    )
}
export default Header