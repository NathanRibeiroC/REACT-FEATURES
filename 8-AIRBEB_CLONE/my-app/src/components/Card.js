import React from "react";
// Stylesheet
import "../style.css";
// Images
import SwimmerImage from "../images/swimmer-image.png";
import StarIcon from "../images/star-icon.svg";
import ElipseIcon from "../images/elipse--icon.svg";

export default function Card(props) {
  let badgeText = ""
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" alt="image that represents the card service"/>
      <div className="card--stats">
        <img src={StarIcon} className="card--star"/>
        <span className="card--rating">{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  );
}
