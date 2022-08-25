import React from "react";
// Stylesheet
import "../style.css";
//Images
import EmailIcon from "../images/email-icon.svg";
import LinkedinIcon from "../images/linkedin-icon.svg";

export function EmailButton() {
  return (
    <button className="email--button">
      <img src={EmailIcon} />
      <span>Email</span>
    </button>
  );
}

export function LinkedinButton() {
  return (
    <button className="linkedin--button">
      <img src={LinkedinIcon} />
      <span>LinkedIn</span>
    </button>
  );
}
