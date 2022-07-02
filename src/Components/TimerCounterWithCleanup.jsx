import { useEffect, useState } from "react";

export default function TimerCounterWithCleanup(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log("component is mounting")
    const id=setInterval(()=>{
      console.log('setInterval',Date.now());
      setCount((prev)=>prev+1)
    },1000)

    const cleanup=()=>{
      console.log('componenet is unmountin')
      clearInterval(id)
    };
    return cleanup;
  },[])
 
  return(
    <div>
      <h1>Timer with Mountin and Unmounting</h1>
      <h2>Counter:{count}</h2>
      <p>update on Every second</p>

      </div>
  )
}