import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'C:/Users/Emin/ReactProjects/bus-station-frontend/src/App.css';
import BodyAuthorization from "../Components/BodyAuthorization.js";


export default class Authorization extends Component{

  render(){

    return (
    
      <div className="App">
       
      
        {/* <header className="header">
        <HeaderText/> 
         
        </header> */}
  
        {/* <main className="main"> */}
          <BodyAuthorization/>
          {/* <FooterText/> */}

  
        {/* </main> */}
  
        {/* <footer className="footer">
        <FooterText/>
         
        </footer> */}
  
      </div>
    );

  }


  
}