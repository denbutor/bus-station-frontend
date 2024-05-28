import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import GmailImage from './Images/gmail.png';
import logo from './Images/GodFather.png';
import Home from '../Pages/AppHome'; 
import About from '../Pages/AppAbout'; 
import Order from '../Pages/AppOrder'; 
import Tripcode from '../Pages/AppOrderSuccess.js'; 
import Authorization from '../Pages/AppAuthorization.js'; 
import SearchBarStart from './SearchBarStart.js'
import SearchBarFinish from './SearchBarFinish.js'


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed = "top" collapseOnSelect expand="md" variant="dark" className="top-pan">
          <Container>
            <Navbar.Brand href="/home">
              <img
                src={logo}
                height="60"
                width="60"
                className="d-inline-block align-top"
                alt="Logo"            
              />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home" className="top-pan-text">Home</Nav.Link>
                <Nav.Link href="/about" className="top-pan-text">About us</Nav.Link>
                    
              </Nav>
              <h style={{ margin: '10px', fontSize: "18px"}}>Find a trip: </h>
              <SearchBarStart/>
              <SearchBarFinish/>
              <Nav className="mr-auto">
                <Nav.Link href="/order" className="top-pan-text">Order</Nav.Link>
                <Nav.Link href="/tripcode" className="top-pan-text">Trip code</Nav.Link>                
            
              </Nav>

              {/*<Form inline>
                <FormControl
                  type="text"
                  placeholder="Search trip"
                  className="top-pan-text"
                  
                />
                 <Button variant="outline-info" className="top-pan-text">Search</Button> 
              </Form>*/}
              <Nav className="mr-auto">
                <Nav.Link href="/signup" className="top-pan-text">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <a href="https://www.fathercorporation@gmail.com" className="link-Text">fathercorporation@gmail.com</a>

      <a href="https://www.fathercorporation@gmail.com" className="">
        <img className="pic" src={GmailImage} alt="Gmail" />
      </a>
      <h className="number" style={{ marginRight: '50px'}}>Phone: +380970733213</h>
          </Container>
        </Navbar>
      
        <Router>
          <Routes> 
            <Route exact path="/home" element={<Home />} /> 
            <Route exact path="/about" element={<About />} /> 
            <Route exact path="/order" element={<Order />} /> 
            <Route exact path="/tripcode" element={<Tripcode />} /> 
            <Route exact path="/signup" element={<Authorization />} /> 



          </Routes>
        </Router>
      </>
    );
  }
}

