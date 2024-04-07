import React, { Component } from "react";
import Bus1Image from './Images/Bus1.jpg';
import Bus2Image from './Images/Bus2.jpg';
import Bus3Image from './Images/Bus3.jpg';
import Bus4Image from './Images/Bus4.jpg';
import DataTableCars from './DataTables/DataTableCars.js';
import DataTableDrivers from './DataTables/DataTableDrivers.js';
import DataTableFlights from './DataTables/DataTableFlights.js';
import DataTableRoutes from './DataTables/DataTableRoutes.js';
import DataTableSchedules from './DataTables/DataTableSchedules.js';
import DataTableTickets from './DataTables/DataTableTickets.js';


function BodyText() {
    return (
      <div class="body-cont">

      
      <div class="body-container">
        
      

        <DataTableCars/>
        <DataTableDrivers/>
        <DataTableFlights/>
        <DataTableRoutes/>
        <DataTableSchedules/>
        <DataTableTickets/>

       


        <img class="imge" src = {Bus1Image} alt="Bus1"/><p></p>
        <img class="imge" src = {Bus2Image} alt="Bus2"/><p></p>
        <img class="imge" src = {Bus3Image} alt="Bus3"/><p></p>
        <img class="imge" src = {Bus4Image} alt="Bus4"/>

      </div>
      </div>
    );
  }
  
  export default BodyText;

  