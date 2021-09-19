import React, { useEffect, useState } from "react";
import "../css/Introd.css";
import "../css/navBar.css";
import logo from "../images/devGuy.svg";

const Introd = ({ bgStatus }: any) => {
  let [name, setName] = useState(true);
  let [classs, setclasss] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setclasss(!classs);
      setName(!name);
    }, 2000);
    // eslint-disable-next-line
  }, [classs]);

  return (
    <div className="container">
    <div className={bgStatus ? "row envelopedBlack" : "row envelope"}>
      <div className="intro col-lg-6 text-lg">
        <div className={bgStatus ? "whiteText" : "blackText"}>
          <p className="welcomeText">
            Welcome to my portfolio...
          </p>
          <h3>
              Hey folks I'm {" "}
            <span className={classs ? "name fadeIn" : "name fadeOut"}>
              {name ? "Rohan Harnale" : "Web Developer"}
            </span>
          </h3>
          <p className="description">Building a succesful product is a challenge, I am highly energetic
            in web development.
          </p>
        </div>
        <div className="conButtonsPc link">
          <a href="https://drive.google.com/file/d/1EHYrf0wVgZzMfq_OJQIId37Jd-rf7xd3/view?usp=sharing" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-light"><i className="fas fa-file-download"></i> Download Resume</button>
          </a>
          <button type="button" className="btn btn-dark btn-intro">Get a free Quote</button>
        </div>
      </div>
      <div className="devGuy col-lg-6 text-center">
        <img src={logo} alt="devGuy" />
        <div className="conButtons">
          <a href="https://drive.google.com/file/d/1EHYrf0wVgZzMfq_OJQIId37Jd-rf7xd3/view?usp=sharing" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-light"><i className="fas fa-file-download"></i> Download Resume</button>
          </a>
          <button type="button" className="link btn btn-dark btn-intro">Get a free Quote</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Introd;
