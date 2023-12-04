/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"
import '../App.css'

export default function Hero () {
    return (
        <>
           <div className="hero-section">
            <div className="hero-text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <Link><button className="btn">Get Started</button></Link>
            </div>
            <div className="hero-image">

            </div>
           </div>
        </>
    )
}