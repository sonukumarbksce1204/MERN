import React,{useState} from 'react';

export default function Controlled(){
    const [data,setData]=useState({
        name:"",
        email:"",
        pass:""
    });
    const [condition,setCondition]=useState(false)
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("Name",data.name);
        localStorage.setItem("Email",data.email);
        localStorage.setItem("Password",data.pass);
        setData({
            name:"",
            email:"",
            pass:""
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username'
                value={data.name} onChange={(event)=>{setData((event)={...event,name:event.target.value})}}/><br/><br/>
                <input type="email" placeholder='Enter email'
                value={data.email} onChange={(e)=>{setData((e)={...e,email:e.target.value})}}/><br/><br/>
                <input type="password" placeholder='Enter Password'
                value={data.pass} onChange={(e)=>{setData((e)={...e,pass:e.target.value})}}/><br/><br/>
                <input type="submit" value="create"/>
                {JSON.parse(localStorage.getItem("Data")).name}
                {JSON.parse(localStorage.getItem("Data")).email}
                {JSON.parse(localStorage.getItem("Data")).pass}
            </form>

        </div>
    )
}