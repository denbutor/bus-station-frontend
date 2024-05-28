import React from "react";
import Center from './Images/Center.png';
import Clock from './Images/Clock.png';
import Star from './Images/Star.png';
import Team from './Images/Team.png';
import CSN from './Images/CSN.jpg';
import CNU from './Images/CNU.jpeg';

function BodyAbout() {
    return (
      <div className="body-cont">      
      <div className="body-container"> 
        

          <h2>About Us</h2>
          
          <div className="about-section">
            <img className="about-icon" src={Clock} alt="Clock" height="20px"/>
            <h4>History</h4> 
            <p className="text-about">
              <span>Hello, we are pleased to welcome you to the website of our company selling bus tickets! It was founded in Chernivtsi by </span>
              <span>Denys Butorin and Arsen Dovhomelia, students of the 3rd year of Computer Engineering (Computer Systems and Networks) of ChNU.</span>
            </p>
          </div>

          <div className="about-section">
            <img className="about-icon" src={Star} alt="Star" height="20px"/>
            <h4>Our values and mission</h4>
            <p className="text-about">
              <span>We work every day, guided by the highest standards of quality, safety and comfort. Our mission is to provide our customers </span>
              <span>with a reliable and convenient way to travel, providing a wide choice of routes and a high level of service.</span>
            </p>
          </div>

          <div className="about-section">
            <img className="about-icon" src={Team} alt="Team" height="20px"/>
            <h4>Our team</h4>
            <p className="text-about">
              <span>Our success is the result of joint efforts of our friendly and professional team. </span>
              <span>We have capable professionals in every field of activity, ready to provide you with the best service.</span>
            </p>
          </div>

          <div className="about-section">
            <img className="about-icon" src={Center} alt="Center" height="20px"/>
            <h4>Contact us</h4>
            <p className="text-about">
              <span>We are always happy to cooperate and interact with our customers. Feel free to contact us with any questions or suggestions.</span>
              <span>We are available for you by e-mail: <a href="mailto:fathercorporation@gmail.com" className="link-text">fathercorporation@gmail.com</a> or by phone: +380970733213.</span>
              <span>Therefore, if you have any questions or problems, do not hesitate to contact our support team, who will be happy to help you.</span>
              <span>Enjoy using it and have a nice trip!</span>
            </p>
          </div>
          <div className="img-about" style={{ marginBottom: '30px'}}>
          <img style={{ marginRight: '30px'}} src={CNU} alt="CNU" width="290"/>
          <img src={CSN} alt="CSN" width="200"/>
          </div>

        </div>
      </div>
    );
}

export default BodyAbout;
