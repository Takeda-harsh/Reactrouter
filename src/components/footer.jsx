/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'
export default function Footer () {
    return (
        <>
        <footer>
            <div className="footer-nav">
                <div className="f-logo">
                    <img src="../src/assets/images/logo.svg"/>
                </div> 

                <div className="f-links">
                    <div className="f-links-nav">
                        <li className="f-header">Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </div>
                    <div className="f-links-nav">
                        <li className="f-header">Resources</li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </div>
                    <div className="f-links-nav">
                        <li className="f-header">Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                    </div>
                    <div className="socials">
                        <img src="../src/assets/images/icon-facebook.svg"/>
                        <img src="../src/assets/images/icon-twitter.svg"/>
                        <img src="../src/assets/images/icon-pinterest.svg"/>
                        <img src="../src/assets/images/icon-instagram.svg"/>
                    </div>
                </div>
            </div>
        </footer>
          
        </>
    )
}
