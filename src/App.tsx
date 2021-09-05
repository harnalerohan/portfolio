import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import Introd from './components/Introd';

function App() {
  let [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status)
  }
  
  return (
    <div className={status ? "container envelopedBlack" : "container envelope"}>
      <NavBar bgStatus={status} handleBackground={handleStatus}/>
      <Introd bgStatus = {status}/>
    </div>
  );
}

export default App;
