import React from "react";
import "../style.css";
//Images
import earthIcon from "../images/earth-icon.svg";
import gpsIcon from "../images/gps-icon.svg";
import japanImage from "../images/japan.png";

function ContentBox() {
  return (
    <summary className="summary--section">
      <img src={japanImage} />
      <section className="info--section">
        <section className="location--section">
          <img src={gpsIcon} />
          <h1>JAPAN</h1>
          <h2>View on Google Maps</h2>
        </section>
        <h1>Mount Fuji</h1>
        <h2>12 Jan, 2021 - 24 Jan, 2021</h2>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </section>
    </summary>
  );
}

export default ContentBox;
