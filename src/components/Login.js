import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {auth} from '../FirebaseConfig/firebase'
import "./Login.css";

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{

            history.push("/")
        }).catch(e=>alert(e.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/")
        }).catch(e=>alert(e.message))
    }


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input onChange={event=>setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input onChange={event=>setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing in, you agree to Amazon's condition of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our internet based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">Create your amazon account</button>
      </div>
    </div>
  );
}

export default Login;
