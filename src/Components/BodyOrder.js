import React, { useState, useEffect } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Tripcode from '../Pages/AppOrderSuccess.js';
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


function BodyOrder() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Car/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setCars(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching cars:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div className="body-cont">      
      <div className="body-container">
      <h2 style={{ marginTop: '48 px' }} >Data of your trip</h2>
      <div className = "left">
     
      <table >
        <thead>
          <th>
            <tr>Start: </tr>
            <tr>Finish: </tr>
            <tr>Date: </tr>
            <tr>Departure Time: </tr>
            <tr>Arrival Time: </tr>
            <tr>Ticket Cost: </tr>            
            <tr>Car Name: </tr>
            <tr>Car Number: </tr>
            <tr>Driver Pib: </tr>
            <tr>Driver Phone Number: </tr>           
          </th>
          <td>            
            <tr>Chernivtsi</tr>
            <tr>Kyiv</tr>
            <tr>30.05.2024</tr>
            <tr>7:00</tr>
            <tr>23:00</tr>
            <tr>1500 UAH</tr>
            <tr>Volkswagen</tr>
            <tr>CE1234AK</tr>
            <tr>Bilokurskiy RR</tr>
            <tr>+380507826595</tr>
          </td>  
          <td>            
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
            <tr>   </tr>
          </td>         
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
        <Link to="/tripcode">
        <button style={{marginTop:"50px", marginLeft:"50px"}}>Buy a ticket</button>
      </Link>
      </table>
      

      
      {/* <Nav.Link href="/tripcode">Trip code</Nav.Link>
      
      <Router>
          <Routes> 
            <Route exact path="/tripcode" element={<Tripcode />} /> 
          </Routes>
      </Router> */}





      {/* <Navbar fixed = "bottom" collapseOnSelect expand="md" variant="dark" className="top-pan">
          <Container>
                
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/tripcode">Trip code</Nav.Link>                
              </Nav>
                            
            </Navbar.Collapse>
           
          </Container>
        </Navbar>
      
        <Router>
          <Routes> 
            <Route exact path="/tripcode" element={<Tripcode />} /> 
          </Routes>
        </Router>
        */}
        
      <div className="right" style={{marginBottom:"50px", marginLeft:"130px"}}>
      <img className="imge" src = {Bus1Image} alt="Bus1" width="400px"/>
      </div>
      
      </div>
      
    </div>
    </div>
    
  );
}

export default BodyOrder;


  