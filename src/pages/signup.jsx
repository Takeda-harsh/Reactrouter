import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

export default function SignUp () {
    return (
        <>
           <div className="Login">
            <div><div className="back-btn"><Link to='/Home'>Back</Link> </div></div>
            <div className="login-details">
                
                <div className="login-header">
                    <h1>Sign up</h1>
                    <p>Get started with Shortly</p>
                </div>
                <div className="user-name">
                    <div>
                    <label htmlFor="First Name" >First Name</label> <br/>
                    <input type="text"/>
                    </div>
                    
                    <div>
                    <label htmlFor="Last Name" >Last Name</label> <br/>
                    <input type="text"/>
                    </div>
                    
                </div>
                
                <div className="user-input">
                    <label htmlFor="password" >Password</label> <br/>
                    <input type="password"/>
                </div>
                <div className="user-input">
                    <label htmlFor="password" >Confirm Password</label> <br/>
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