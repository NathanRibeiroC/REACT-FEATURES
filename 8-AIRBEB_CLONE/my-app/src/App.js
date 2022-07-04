import React from "react";
// Stylesheet
import "./style.css";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"

export default function App() {
  return (
    <div className="app--container">
      <Navbar />
      {/* <Hero/> */}
      <Card/>
    </div>
  );
}
