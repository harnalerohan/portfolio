import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import Introd from './components/Introd';

function App() {
  let [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status)
  }
  
  return (
  <div style={{backgroundColor: status ? "black" : "white", transition: "all 1s ease"}}>
      <NavBar handleBackground={handleStatus}/>
      <Introd bgStatus = {status}/>
    </div>
  );
}

export default App;
