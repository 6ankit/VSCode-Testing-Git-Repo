import React, { useEffect, useState } from "react"

const App = () =>{
  const[data,setData]=useState([1,2,3]);

  useEffect(()=>{
    
  })
  
  return(
    <ReactFragment>
    {
      data.map((value,index)=>(
        <h1 key={index}>{value}</h1>
      ))
    }
    </ReactFragment>
  )
  
}