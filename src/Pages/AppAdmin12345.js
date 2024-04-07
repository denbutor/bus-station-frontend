import React, { Component } from "react";
import 'C:/Users/Emin/ReactProjects/bus-station-frontend/src/App.css';
import FooterText from '../Components/FooterText.js';
import HeaderText from '../Components/HeaderText.js';
import BodyTextAdmin from '../Components/BodyTextAdmin.js';


function App() {
  return (
    <div className="App">
     
    componentDidMount() {
    document.title = "Father Trans Auto"};
    {/* <title>Назва вашої сторінки</title> */}
     

      <header className="header">
      <HeaderText/> 
       
      </header>

      <main className="main">
        <BodyTextAdmin/>

      </main>

      <footer className="footer">
      <FooterText/>
       
      </footer>

    </div>
  );
}

export default App;
