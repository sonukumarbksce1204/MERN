import React from 'react'
import CreateTodos from './CreateTodos.js'

export default function Todo() {
    const [set,setTab]=useState("all")
  return (
    <div>
      <button onClick={()=>setTab("all")}>All</button>
      <button onClick={()=>setTab("complete")}>Completed</button>
      <button onClick={()=>setTab("notvomplete")}>Not Completed</button>
      <Todolist/>
    </div>
  )
}

