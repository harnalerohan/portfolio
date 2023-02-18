import React, { useState, useEffect } from "react";

const WhoAMI = () => {
  let [name, setName] = useState(1);
  let [classs, setclasss] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setclasss(!classs);
      if (name === 1) {
        setName(2);
      } else if (name === 2) {
        setName(1);
      }
    }, 2000);
    // eslint-disable-next-line
  }, [classs]);

  return (
    <div>
      <h3>
        Hey folks I'm{" "}
        <span className={classs ? "name fadeIn" : "name fadeOut"}>
          {name === 1 ? "Rohan Harnale" : "Web Developer"}
        </span>
      </h3>
    </div>
  );
};

export default WhoAMI;