import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

export default function ForgotPassword () {
    return (
        <>
           <div className="Login">
            <div><div className="back-btn"><Link to='/'>Back</Link> </div></div>
            <div className="login-details">
                
                <div className="login-header">
                    <h1>Forgot Password</h1>
                    <p className="ptext">Enter the email address you used when you joined
                    and we’ll send you instructions to reset your password</p>
                </div>
                <div className="user-input">
                    <label htmlFor="email" >Email</label> <br/>
                    <input type="email"/>
                </div>
                
                <p className="error-message"></p>
                
                <button className="login-btn">Send recovery code</button>
                <Link to = '/login' className="f-password">Back to sign</Link>

            </div>

            <div className="login-image">

            </div>
           </div>
        </>
    )
}