import React from "react";
import "../css/navBar.css";

const NavBar = ({bgStatus, handleBackground = (f: any) => f }:any) => {
  console.log("handleBackground", handleBackground)
  return (
    <nav className={`navbar navbar-expand-lg navbar-${bgStatus ? 'dark transition' : 'light transition'} bg-${bgStatus ? 'dark' : 'light'}`}>
      <div className="container">
        <a className="navbar-brand logo" href="/">
          ROHAN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
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
            <li className="nav-item ">
              <a className="nav-link" style={{color: "white"}}> 
                <i className={bgStatus ? "far fa-sun" : "far fa-moon"} onClick={handleBackground}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
