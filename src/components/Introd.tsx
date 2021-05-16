import React, { useEffect, useState } from 'react'
import "../css/Introd.css"
import logo from "../devGuy.svg"


const Introd = ({bgStatus}: any) => {
 let [name, setName] = useState(true);
 let [classs, setclasss] = useState(true)

 useEffect(() => {
  setTimeout(() => {
  }, 3400);
 }, []);

 useEffect(() => {
  setTimeout(() => {
  setclasss(!classs)
  setName(!name)
  }, 2000);
 }, [classs]);

 const handleChange = () => {
  setclasss(!classs)
 }

  return (
    <div className={bgStatus ? "envelopedBlack" : "envelope"}>
      <div className="intro">
        <p style={{color: bgStatus ? "white" : "black"}}>Welcome to my portfolio...</p>
        <h1><span style={{color: bgStatus ? "white" : "black"}}>Hello I am </span><span className={classs ? "name fadeIn" : "name fadeOut"}>{name ? "Rohan Harnale" : "Web Developer"}</span></h1>
      </div>
      <div className="devGuy">
        <img src={logo} alt="devGuy" />
      </div>
    </div>
  )
}

export default Introd
