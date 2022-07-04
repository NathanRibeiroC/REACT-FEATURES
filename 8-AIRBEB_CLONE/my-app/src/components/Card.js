import React from "react";
// Stylesheet
import "../style.css";
// Images
import SwimmerImage from "../images/swimmer-image.png";
import StarIcon from "../images/star-icon.svg";
import ElipseIcon from "../images/elipse--icon.svg";

export default function Card() {
  return (
    <div className="card">
      <img src={SwimmerImage} className="card--image" />
      <div className="card--stats">
        <img src={StarIcon} className="card--star"/>
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}
