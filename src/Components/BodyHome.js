import React from "react";
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



function BodyHome() {
    return (

      <div className="body-cont">      
      <div className="body-container"> 

      <p className="tittle-home">Bus tickets in Ukraine</p> 
      <p className="choose-home">Why choose Father Trans Auto:</p>    
      
      <li className="answer-home">Buying a bus ticket online is easy</li>
      <li className="answer-home">Bus tickets can be booked free of charge</li>
      <li className="answer-home">Bus tickets are easy to return</li>

      {/* <p className="choose-home">The most popular routes:</p>

        <DataTableCars/>
        <DataTableDrivers/>
        <DataTableFlights/>
        <DataTableRoutes/>
        <DataTableSchedules/>
        <DataTableTickets/> */}

      <p className="choose-home">Our "Father-Buses":</p>    

            <div className="imge">

        <img className="imge" src = {Bus1Image} alt="Bus1" width="400px"/>
        <img className="imge" src = {Bus2Image} alt="Bus2" width="400px"/><p></p>
        <img className="imge" src = {Bus3Image} alt="Bus3" width="400px"/>
        <img className="imge" src = {Bus4Image} alt="Bus4" width="400px"/>

        </div>
        <p></p>

        
        <p style={{ alignItems:"center", fontWeight:"bold", fontSize: "25px"}}  >The most popular routes:</p>
      <table>
        <thead>
          {/* <tr>
            <th>Start: </th>
            <th>Finish: </th>
          </tr>
          <tr>            
            <td>Kyiv</td>
            <td></td>
            <td>Odesa</td>
          </tr> 
          <tr>  
            <td>Odesa</td>          
            <td>Kyiv</td>            
          </tr> 
          <tr>            
            <td>Kyiv</td>
            <td>Kharkiv</td>
          </tr>   
          <tr>              
            <td>Kharkiv</td>     
            <td>Kyiv</td>
          </tr>     
          <tr>            
            <td>Kyiv</td>
            <td>Lviv</td>
          </tr> 
          <tr>            
            <td>Lviv</td>            
            <td>Kyiv</td>
          </tr> 
          <tr>            
            <td>Kyiv</td>
            <td>Dnipro</td>
          </tr>  
          <tr>
            <td>Dnipro</td>            
            <td>Kyiv</td>
          </tr> 
          <tr>            
            <td>Kyiv</td>
            <td>Kherson</td>
          </tr> 
          <tr>
            <td>Kherson</td>            
            <td>Kyiv</td>
          </tr>  */}
        </thead>
        {/* <tbody>
          {cars.map(car => (
            <tr key={car.id}>             
              <td>{car.carType}</td>
              <td>{car.carNumber}</td>
              <td>{car.passengersCount}</td>
            </tr>
          ))}
        </tbody> */}
      </table>

      <table style={{ alignItems:"center", fontSize: "15px", marginLeft:"350px"}} cellSpacing={100}>
        <thead>
        <td>            
            <tr style={{ alignItems:"center", fontWeight:"bold", fontSize: "15px"}}>Start</tr>
            <tr>Kyiv</tr>            
            <tr>Odesa</tr>            
            <tr>Kyiv</tr>            
            <tr>Kharkiv</tr>            
            <tr>Kyiv</tr>            
            <tr>Lviv</tr>            
            <tr>Kyiv</tr>            
            <tr>Dnipro</tr>            
            <tr>Kyiv</tr>            
            <tr>Kherson</tr>            
          </td>  

          <td>            
            <tr style={{ alignItems:"center", fontWeight:"bold", fontSize: "15px"}}>Finish</tr>
            <tr>Odesa</tr>
            <tr>Kyiv</tr>
            <tr>Kharkiv</tr>
            <tr>Kyiv</tr>
            <tr>Lviv</tr>
            <tr>Kyiv</tr>
            <tr>Dnipro</tr>
            <tr>Kyiv</tr>
            <tr>Kherson</tr>
            <tr>Kyiv</tr>
          </td> 
        </thead>
      </table>

        <p className="down-home">We use the information registered in cookies, in particular, for advertising and statistical purposes, as well as to adapt our sites to the individual needs of Users. You can change the cookie settings in your browser. Changing the settings may limit the functionality of the site.</p>
        <p className="down-home">© 2024, FatherCorporation. Online ticket sales service. All rights reserved.</p>

        


      </div>
      </div>

    );
  }
  
  export default BodyHome;

  