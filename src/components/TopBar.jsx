import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Toolbar, Typography } from '@material-ui/core';
import userService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
 const useStyles = makeStyles((theme) => ({
    Name: {
       color:"black",
     },
   }));
const TopBar= () => {
    const classes = useStyles();
     return ( 
    
    ////////////
    <Navbar bgcolor="" variant="light">
    <Navbar.Brand className={classes.Name} href="/"><em>TERMINAL</em></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/MyCart">My Cart</Nav.Link>
      <Nav.Link href="/contact-us">Contact Us</Nav.Link>

      {!userService.isLoggedin()? <>
      
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>   
             </>:<Button variant="contained" color="secondary" onClick={(e)=>{
                 userService.logout();
                 window.location.reload();
             }}>Log Out</Button>}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info" className={classes.Name}>Search</Button>
    </Form>
  </Navbar>
    );

}
 
export default TopBar;