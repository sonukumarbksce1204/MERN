import React ,{useEffect, useState} from 'react'

export default function Effect(){
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(10000)
    useEffect(()=>{
        var time=setInterval(()=>{
        console.log("Adfar")
    },3000)
    return ()=>{
        clearInterval(time);
    }
    })
    return (
        <div>
            <h1>Adfar</h1>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>++++</button>
            <h1>number: {number}</h1>
            <button onClick={()=>setNumber(number-1)}>+++____+++</button>
        </div>
    )

}