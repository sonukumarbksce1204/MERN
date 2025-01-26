import React, { useState } from 'react';

export default function DummySignup() {
    const [data, setData] = useState({
        email: "",
        pass: ""
    });
    const [isSignup, setIsSignup] = useState(true); 
    const [message, setMessage] = useState(""); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            localStorage.setItem("email", data.email);
            localStorage.setItem("pass", data.pass);
            setIsSignup(false); 
        }else {
            const storedEmail = localStorage.getItem("email");
            const storedPass = localStorage.getItem("pass");
            if (data.email === storedEmail && data.pass === storedPass) {
            
                setMessage(`Hi ${data.email}`);
                setIsAuthenticated(true); 
            }
        }
        setData({ 
            email: "",
            pass: "" 
        });
    }
    if(isAuthenticated){
        return <h2>{message}</h2>;
    }

    return (
        <div>
            <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}/><br />
                <input type="password" placeholder="Password" value={data.pass}
                onChange={(e) => setData({ ...data, pass: e.target.value })} />
                <br />
                <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
            </form>
            <p>{message}</p>
        </div>
    );
}



