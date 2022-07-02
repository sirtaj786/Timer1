
import './App.css';
import { useState } from 'react';
import Timer from "./Components/Timer";
import TimerCounterWithCleanup from './Components/TimerCounterWithCleanup';
import TimercountSettimeout from './Components/TimerCountSettimeout';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      <Timer/>
      <TimercountSettimeout/>

      {show &&<TimerCounterWithCleanup/>}
      <button onClick={()=>setShow(!show)}>TOGGLE</button>
    </div>
  );
}

export default App;
