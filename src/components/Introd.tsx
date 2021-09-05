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
      <div className="intro col-lg-6 text-lg-center">
        <p className={bgStatus ? "whiteText" : "blackText"}>
          Welcome to my portfolio...
        </p>
        <h3>
          <span className={bgStatus ? "whiteText" : "blackText"}>
            Hello I am{" "}
          </span>
          <span className={classs ? "name fadeIn" : "name fadeOut"}>
            {name ? "Rohan Harnale" : "Web Developer"}
          </span>
        </h3>
      </div>
      <div className="devGuy col-lg-6 text-center pb-5">
        <img src={logo} alt="devGuy" />
      </div>
    </div>
  );
};

export default Introd;
