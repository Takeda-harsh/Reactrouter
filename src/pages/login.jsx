import React from "react";
import '../App.css'

export default function Login () {
    return (
        <>
           <div className="Login">
            <div className="login-details">
                <div>
                    <h1>Login</h1>
                    <p>Get started with Shortly</p>
                </div>
                <div>
                    <label htmlFor="email" >Email</label> <br/>
                    <input type="email"/>
                </div>
                
                <div>
                    <label htmlFor="password" >Password</label> <br/>
                    <input type="password"/>
                </div>

                <p className="error-message"></p>

                <button>Login</button>

                <div>
                    <p>Don't have an account yet? <span>Sign Up</span></p>
                </div>
            </div>

            <div className="login-image">

            </div>
           </div>
        </>
    )
}