import React, { useEffect, useState } from "react";
import "../css/Introd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../devGuy.svg";

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
    <div className={bgStatus ? "row envelopedBlack" : "row envelope"}>
      <div className="intro col-lg-6 text-lg-left">
        <p style={{ color: bgStatus ? "white" : "black"}}>
          Welcome to my portfolio...
        </p>
        <h1>
          <span style={{ color: bgStatus ? "white" : "black" }}>
            Hello I am{" "}
          </span>
          <span className={classs ? "name fadeIn" : "name fadeOut"}>
            {name ? "Rohan Harnale" : "Web Developer"}
          </span>
        </h1>
      </div>
      <div className="devGuy col-lg-6 text-center">
        <img src={logo} alt="devGuy" />
      </div>
    </div>
  );
};

export default Introd;
