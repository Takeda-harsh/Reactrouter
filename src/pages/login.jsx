import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

export default function Login () {
    return (
        <>
           <div className="Login">
            <div><div className="back-btn"><Link to= '/Home'>Back</Link> </div></div>
            <div className="login-details">
                
                <div className="login-header">
                    <h1>Login</h1>
                    <p>Get started with Shortly</p>
                </div>
                <div className="user-input">
                    <label htmlFor="email" >Email</label> <br/>
                    <input type="email"/>
                </div>
                
                <div className="user-input">
                    <label htmlFor="password" >Password</label> <br/>
                    <input type="password"/>
                </div>

                <p className="error-message"></p>

                <button className="login-btn">Login</button>

                <div className="account">
                    <p>Don't have an account yet? <span>Sign Up</span></p>
                </div>
            </div>

            <div className="login-image">

            </div>
           </div>
        </>
    )
}