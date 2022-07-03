import React from "react";
// Stylesheet
import "../style.css";
import { EmailButton } from "./Buttons";
// Images

export default function Main() {
  return (
      <section className="main--section">
        <h1>Goku</h1>
        <h2>Professional Saiyajin</h2>
        <h3>son_goku@dbz.com</h3>
        <EmailButton/>
      </section>
  );
}