import React from "react";
// Stylesheet
import "../style.css";
// Images
import AirBnbIcon from "../images/airbnb_icon.svg"

export default function Navbar() {
  return (
    <nav className="nav">
        <img src={AirBnbIcon}/>
    </nav>
  );
}