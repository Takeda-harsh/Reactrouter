// eslint-disable-next-line no-unused-vars
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Features from "../pages/features";
import Pricing from "../pages/pricing";
import Resources from "../pages/resources";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Home from "../pages/home";

export default function Links () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/features" element={<Features />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes>
        </>
    )
}