import React,{useRef,useState} from 'react'

export default function Uncontrolled() {
  const fname=useRef(null)
  const email=useRef(null)
  const password=useRef(null)
  const [allow,setAllow]=useState(false)


  function submitForm(e){
    e.preventDefault();
    setAllow(true)
    console.log(fname.current.value)
    console.log(email.current.value)
    console.log(password.current.value)
  }

    return (
    <div>
      <form>
        <label>UserName: </label>
        <input type='text' ref={fname}/>
        <br/>
        <label type="email" ref={email}>Email: </label>
        <input/>
        <br/>
        <label type='password' ref={password}>Password: </label>
        <input/>
        <br/>
        <input type="submit" value="submit" onClick={submitForm}/>
      </form>
      {allow && <h1>Username is {fname.current.value}</h1>
      }
      
    </div>
  )
}
