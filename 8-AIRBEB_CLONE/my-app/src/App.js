import React from "react";
// Stylesheet
import "./style.css";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
//Images
import Img1 from "./images/swimmer-image.png";
import Img2 from "./images/wedding-photography 1.png";
import Img3 from "./images/mountain-bike 1.png";
//Data
import data from "./data";

/**
 * img
 * rating 5.0
 * reviewCount (6)
 * country any
 * title any
 * price 136
 *
 */

export default function App() {
  const cards = data.map((cardInfo) => (
    // <Card
    //   id = {cardInfo.id}
    //   image={cardInfo.coverImg}
    //   rating={cardInfo.stats.rating}
    //   reviewCount={cardInfo.stats.reviewCount}
    //   country={cardInfo.location}
    //   title={cardInfo.title}
    //   price={cardInfo.price}
    //   openSpots={cardInfo.openSpots}
    // />
    <Card
    id = {cardInfo.id}
    // item = {cardInfo}
    {...cardInfo}
  />
  ));
  return (
    <div className="app--container">
      <Navbar />
      <Hero/>
      {/* <Card image={Img1} rating="5.0" reviewCount="(6)" country="USA" title="Life  lessons with a swimmer" price="136"/>
      <Card image={Img2} rating="5.0" reviewCount="(30)" country="USA" title="Wedding photography lesson" price="125"/>
      <Card image={Img3} rating="4.8" reviewCount="(2)" country="USA" title="How to Ride Mountain Bike" price="50"/> */}
      <section className="cards">{cards}</section>
    </div>
  );
}
