import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import Bus1Image from './Images/Bus1.jpg';
//import Bus2Image from './Images/Bus2.jpg';
//import Bus3Image from './Images/Bus3.jpg';
//import Bus4Image from './Images/Bus4.jpg';
//import DataTableCars from './DataTables/DataTableCars.js';
//import DataTableDrivers from './DataTables/DataTableDrivers.js';
//import DataTableFlights from './DataTables/DataTableFlights.js';
//import DataTableRoutes from './DataTables/DataTableRoutes.js';
//import DataTableSchedules from './DataTables/DataTableSchedules.js';
//import DataTableTickets from './DataTables/DataTableTickets.js';
import SearchBarLogin from './SearchBarLogin.js'
import SearchBarPassword from './SearchBarPassword.js'



function BodyAuthorization() {
  return (
    <div className="body-cont">      
      <div className="body-container">
        
      <h2  style={{ marginTop: '30px' }}>Enter your data</h2>
      {/* <h2  style={{ marginTop: '30px' }}>Your trip is boocked!</h2>
      <h3  style={{ marginTop: '20px' }}>Take a screenshot or remember this code to go:</h3>
      <h4  style={{ marginTop: '15px' }}>**********</h4>
      <h6  style={{ marginTop: '15px' }}>Without code you can't take a trip!!!</h6> */}
      <div className='authorization'>
      <SearchBarLogin/>
      </div>
      <p></p>
      <div className='authorization'>

      <SearchBarPassword/>
      </div>
      <div className='authorization'>

      <Link to="/tripcode">
        <button style={{marginTop:"50px", marginBottom:"50px"}}>Sign up</button>
      </Link>
      </div>
      
      

      
      
      </div>
    </div>
    
  );
}

export default BodyAuthorization;


  