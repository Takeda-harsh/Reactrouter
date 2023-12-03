// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import LinkInput from '../components/linkinput'
import Statistics from '../components/statistics'
import Boost from '../components/boost'
import Footer from '../components/footer'
// import { Link } from "react-router-dom";


export default function Home () {
    return (
        <>
           <Navigation/>
           <Hero/>
           <LinkInput/>
           <Statistics/>
           <Boost/>
           <Footer/>
        </>
    )
}