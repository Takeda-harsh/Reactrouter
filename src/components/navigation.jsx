/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'
export default function Navigation () {
    return (
        <>
        <nav>
            <div className="nav-left">
                <div className="logo">
                </div> 

                <div className="nav-links">
                    <Link to= '/features'>Features</Link> 
                    <Link to= '/pricing'>Pricing</Link> 
                    <Link to= '/resources'>Resources</Link> 
                </div>
            </div>
         

            <div className="signup">
                    <Link to = '/login'>Login</Link>
                    <Link to = '/signup' className="nav-signup">Sign up</Link>
            </div>
        </nav>
          
        </>
    )
}
