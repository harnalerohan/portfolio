import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import Introd from './components/Introd';
import Project from './components/Project';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  let [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status)
  }

  const mouseMove = (e: any) => {
    const cursor:any = document.getElementById("cursor");
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
  }
  
  return (
    <div className={`${status ? `envelopedBlack` : `envelope`}`} onTouchMove = {mouseMove} onMouseMove={mouseMove}>
      <NavBar bgStatus={status} handleBackground={handleStatus}/>
      <Introd bgStatus = {status}/>
      <Project bgStatus = {status}/>
      <Timeline bgStatus = {status}/>
      <Contact bgStatus = {status}/>
      <Footer bgStatus = {status}/>
      <Cursor/>
    </div>
  );
}

export default App;
