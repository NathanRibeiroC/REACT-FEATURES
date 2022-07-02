import React from "react";
import "../style.css";
// images
import ReactLogo from "../images/logo192.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={ReactLogo} />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
