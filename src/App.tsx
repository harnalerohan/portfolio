import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import Introd from './components/Introd';
import Project from './components/Project';

function App() {
  let [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status)
  }
  
  return (
    <div className={status ? "container-fluid envelopedBlack" : "container-fluid envelope"}>
      <NavBar bgStatus={status} handleBackground={handleStatus}/>
      <Introd bgStatus = {status}/>
      <Project bgStatus = {status}/>
    </div>
  );
}

export default App;
