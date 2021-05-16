import React, { useState } from "react";
import "../css/navBar.css";

const NavBar = ({handleBackground = (f: any) => f}) => {

  let [click, setClick] = useState(false);
  let [background, setBackground] = useState(false);

  const managaBackground = () => {
    setBackground(!background)
    handleBackground(background)
  }

  const handleClick = () => {
    check()
    setClick(!click)
  }

  const check = () => {
    let navLinks = document.querySelectorAll('.nav-links li')
    navLinks.forEach((link: any, index) => {
      if(link.style.animation){
        link.style.animation = ""
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
      }
    });

    let burger: any = document.querySelector('.burger');
    burger.classList.toggle('toggle')    
  }

  return (
    <nav className={background ? "envelopedBlack" : "envelope"}>
      <div className="logo">
        <h4 style={{color: "#6c63ff"}}>Rohan</h4>
      </div>
      <div>
        <p>.</p>
      </div>
      <ul className={click ? "nav-links nav-active" : "nav-links"}>
        <li>
          <a style={{color: background ? "white" : "black"}} href="#Projects">Projects</a>
        </li>
        <li>
          <a style={{color: background ? "white" : "black"}} href="#Resume">Resume</a>
        </li>
        <li>
          <a style={{color: background ? "white" : "black"}} href="#Skills">Skills</a>
        </li>
      </ul>
      <div className="burger" onClick={handleClick}>
        <div style={{backgroundColor: background ? "white" : "black"}} className="line1"></div>
        <div style={{backgroundColor: background ? "white" : "black"}} className="line2"></div>
        <div style={{backgroundColor: background ? "white" : "black"}} className="line3"></div>
      </div>
      <div className="colorMode">
        <i style={{color: background ? "white" : "black"}} onClick={managaBackground} className={background ? "fas fa-sun fa-lg" : "fas fa-moon fa-lg"}></i>
      </div>
    </nav>
  );
};

export default NavBar;
