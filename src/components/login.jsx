import "./login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";




 function Login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    
    function handleSubmit(event){
        event.preventDefault();
        dispatch (login({name, email, password,loggedIn:true}));

    }
    return(

        <div className="container">
        <h2>Login With Redux</h2>
        <form onSubmit={handleSubmit}>
        <input placeholder="name" className="result-container" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="e-mail" className="result-container" type="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="passwod" className="result-container" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="btn btn-large" id="generate">Login</button>
        </form>
         
  
       
      </div>
  
  
    )
}
export default Login;