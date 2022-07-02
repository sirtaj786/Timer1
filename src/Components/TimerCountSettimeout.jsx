
import { useEffect, useState } from "react";

export default function TimercountSettimeout(){
  const[count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  },[count])
  return(
    <div>
        <h1>Dependency with count</h1>
      <h1>Counter:{count}</h1>
      <h3>Update every second</h3>
      </div>
  )
}