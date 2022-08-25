import React from "react";
import "../style.css";
//Images
import earthIcon from "../images/earth-icon.svg";
import gpsIcon from "../images/gps-icon.svg";
import japanImage from "../images/japan.png";

function ContentBox(props) {
  var flag=true
  if(props.title==="Sydney Opera House"){
    flag=false
  }
  return (
    <summary className="summary--section">
      <img src={props.imageUrl} />
      <section className="info--section">
        <section className="location--section">
          <img src={gpsIcon} />
          <h1>{props.location}</h1>
          <h2><a href={props.googleMapsUrl}>View on Google Maps</a></h2>
        </section>
        <h1>{props.title}</h1>
        <h2>{props.startDate} - {props.endDate}</h2>
        <p>
        {props.description}
        </p>
      </section>
      {flag && <div className="line--div"></div>}
    </summary>
  );
}

export default ContentBox;
