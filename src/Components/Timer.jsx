import { useEffect, useState } from "react";

export default function Timer(){
  const[count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
      console.log(`count${count}`)
    },1000)
  },[])
  return(
    <div>
      <h1>Counter:{count}</h1>
      <h3>Update every second</h3>
      </div>
  )
}  