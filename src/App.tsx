import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import Introd from './components/Introd';
import Project from './components/Project';
import Timeline from './components/Timeline';

function App() {
  let [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status)
  }
  
  return (
    <div className={status ? "envelopedBlack" : "envelope"}>
      <NavBar bgStatus={status} handleBackground={handleStatus}/>
      <Introd bgStatus = {status}/>
      <Project bgStatus = {status}/>
      <Timeline bgStatus = {status}/>
    </div>
  );
}

export default App;
