import React, { useEffect, useState } from "react";
import InstImage from './Images/inst.png';

function Footer() {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
      setShowPanel(true);
    } else {
      setShowPanel(false);
    }
  };

  return (
    <div className={showPanel ? 'down-panel active' : 'down-panel'}>
      {/* <a href="https://www.fathercorporation@gmail.com" className="link-Text">fathercorporation@gmail.com</a>

      <a href="https://www.fathercorporation@gmail.com" className="Gmail">
        <img className="pic" src={GmailImage} alt="Gmail" />
      </a> */}


      <a href="https://www.instagram.com/fathertransauto?igsh=d3R4ejV6NzFteTh4" className="link-Text">Instagram: fathertransauto</a>

      <a href="https://www.instagram.com/fathertransauto?igsh=d3R4ejV6NzFteTh4" className="Inst">
        <img className="pic" src={InstImage} alt="Inst" />
      </a>
    </div>
  );
}

export default Footer;
