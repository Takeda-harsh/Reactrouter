/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import '../App.css'
import StatsCard from '../components/statscard'
import Data from '../data.json'

export default function Statistics () {
    const [data,setData] = useState ([])
    useEffect(() => {
        setData(Data)
    },[])
    return (
        <>
           <div className="stats-section">
                <div className="stats-text">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>

                <div className="stats-div">
                    <ul className="stats-list">
                        {
                            data.map((card, id) =>(
                                <StatsCard
                                    key= {id}
                                    icon ={card.icon}
                                    title = {card.title}
                                    details = {card.details}
                                />
                            ))
                        }
                    </ul>
                </div>
           </div>
        </>
    )
}