import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed import to include Routes
import GmailImage from './Images/gmail.png';
import logo from './Images/GodFather.png';
import Home from '../Pages/AppHome'; 
import About from '../Pages/AppAbout'; 

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" variant="dark" className="top-pan">
          <Container>
            <Navbar.Brand href="/">
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
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="top-pan-text"
                  
                />
                {/* <Button variant="outline-info" className="top-pan-text">Search</Button> */}
              </Form>
            </Navbar.Collapse>
            <a href="https://www.fathercorporation@gmail.com" className="link-Text">fathercorporation@gmail.com</a>

      <a href="https://www.fathercorporation@gmail.com" className="">
        <img className="pic" src={GmailImage} alt="Gmail" />
      </a>
      <h className="number">Phone: +380970733213</h>
          </Container>
        </Navbar>
      
        <Router>
          <Routes> 
            <Route exact path="/home" element={<Home />} /> 
            <Route exact path="/about" element={<About />} /> 
          </Routes>
        </Router>
      </>
    );
  }
}
