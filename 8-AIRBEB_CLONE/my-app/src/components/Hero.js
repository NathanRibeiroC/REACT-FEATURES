import React from "react";
// Stylesheet
import "../style.css";
//Images
import HeroBackgroundImage from "../images/group-77.svg"

export default function Hero(){
    return(
        <section className="hero">
            <img src={HeroBackgroundImage} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}