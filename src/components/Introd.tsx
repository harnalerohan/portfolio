import React, { useEffect, useState } from "react";
import "../css/Introd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container mb-5">
    <div className={bgStatus ? "row envelopedBlack" : "row envelope"}>
      <div className="intro col-lg-6 text-lg">
        <div className={bgStatus ? "whiteText" : "blackText"}>
          <p>
            Welcome to my portfolio...
          </p>
          <h3>
            <span>
              Hey folks I'm {" "}
            </span>
            <span className={classs ? "name fadeIn" : "name fadeOut"}>
              {name ? "Rohan Harnale" : "Web Developer"}
            </span>
          </h3>
          <p className="description">Building a succesful product is a challenge, I am highly energetic
            in web development.
          </p>
        </div>
      </div>
      <div className="devGuy col-lg-6 text-center pb-5">
        <img src={logo} alt="devGuy" />
      </div>
    </div>
    </div>
  );
};

export default Introd;
