import React from "react";
// Stylesheet
import "../style.css";
//Images
import GithubIcon from "../images/github-icon.svg";
import InstagranIcon from "../images/instagran-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import TwitterIcon from "../images/twitter-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={TwitterIcon} />
      <img src={FacebookIcon} />
      <img src={InstagranIcon} />
      <img src={GithubIcon} />
    </footer>
  );
}
