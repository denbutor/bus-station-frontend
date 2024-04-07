import React, { Component } from "react";
import CSN from './Images/CSN.jpg';
import CNU from './Images/CNU.jpeg';





function BodyTextAboutUs() {
    return (
      <div class="body-cont">      
      <div class="body-container"> 
                    {/* <Link to="C:/Users/Emin/ReactProjects/bus-station-frontend/src/AppAboutUs.js"></Link> */}

        
 

      <h2>About Us</h2>
      
      <h>Hello, we are a company engaged in fast and comfortable</h>
      <h>transportation of passengers. Founded in the city of </h>
      <h>Chernivtsi by the 3rd year students of ChNU Computer Engenering</h>
      <h> (Computer Systems amd Networks), </h>
      <h>Denys Butorin and Arsen Dovhomelia. </h>
      <h>If you have any questions or problems, feel free to contact our support,</h>
      <h> who will be happy to help you. Enjoy using it and have a nice trip.</h>   
       

      <img className="img-about" src = {CNU} alt="CNU" height="200"/> 
      <img className="img-about" src = {CSN} alt="CSN" height="200"/>
      



        

       

      </div>
      </div>
    );
  }
  
  export default BodyTextAboutUs;

  