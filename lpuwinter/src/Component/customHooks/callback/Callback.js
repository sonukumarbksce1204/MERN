import React,{useCallback,useState} from 'react'

const a=new Set()
export default function Callback() {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(1000)
    const handleIncrementC=useCallback(()=>{
        setCount(count+1)
    },[count])
    const handleDecrementC=useCallback(()=>{
        setCount(count-1)
    },[count])
    const handleIncrementN=useCallback(()=>{
        setCount(number+1)
    },[number])
    const handleDecrementN=useCallback(()=>{
        setCount(number-1)
    },[number])
    a.add(handleIncrementN)
    a.add(handleIncrementC)
    a.add(handleDecrementC)
    a.add(handleIncrementN)
    // alert(a.size)

  return (
    <div>
      <h1>Count:{count},Number:{number}</h1>
      <button onClick={handleIncrementC}> Increment Count</button>
      <button onClick={handleDecrementC}> Decrement Count</button>
      <button onClick={handleIncrementN}> Increment Number</button>
      <button onClick={handleDecrementN}> Decrement Number</button>
    </div>
  )
}
