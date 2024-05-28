  import React, { useEffect, Component } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import {Button} from "react-bootstrap"
  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css';
  import Header from './Components/Header.js'
  import Footer from './Components/Footer.js';
  import AppHome from './Pages/AppHome.js';
  import AppAbout from './Pages/AppAbout.js';


  function App() {
    
    return (
      <div className="App">
        <Header/>
       

        <Footer/>





        {/* <Router>
          <Routes>
            <Route path="/main" component={AppMain} />
            <Route path="/aboutus" component={AppAboutUs} />
          </Routes>x
        </Router> 

        <AppMain/>
        <AppAboutUs/>*/}
      </div>
    );
  }

  export default App;
