import React from "react";
import "../css/navBar.css";

const NavBar = ({bgStatus, handleBackground = (f: any) => f }:any) => {
  return (
    <div className="container">
    <nav className={`ml-auto navbar navbar-expand-lg navbar-${bgStatus ? 'dark transition' : 'light transition'} bg-${bgStatus ? 'dark' : 'light'}`}>
        <a className="navbar-brand logo link" href="/">
          ROHAN
        </a>
          <span className="link nav-link" style={{color: "white"}}> 
            <i className={bgStatus ? "far fa-sun pt-1" : "far fa-moon pt-1"} onClick={handleBackground}></i>
          </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon link"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="link navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Testemonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> 
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
