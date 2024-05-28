import React, { useState, useEffect } from 'react';
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



function Tripcode() {
  return (
    <div className="body-cont">      
      <div className="body-container">
        
      <h2  style={{ marginTop: '30px' }}>Payment was successfull!</h2>
      <h2  style={{ marginTop: '30px' }}>Your trip is boocked!</h2>
      <h3  style={{ marginTop: '20px' }}>Take a screenshot or remember this code to go:</h3>
      <h4  style={{ marginTop: '15px' }}>**********</h4>
      
      <div id="randomNumber"></div>
      <h6  style={{ marginTop: '15px' }}>Without code you can't take a trip!!!</h6>

      
      
      </div>
    </div>
    
    
  );
}

export default Tripcode;


  