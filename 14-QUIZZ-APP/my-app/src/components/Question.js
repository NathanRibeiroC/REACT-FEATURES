import React from "react";
import "../index.css";

export default function Question(props) {
  return (
    <section className="question--section">
      <h1>{props.question}</h1>
      <div className="buttons--div">
        <button>{props.answer1}</button>
        <button>{props.answer2}</button>
        <button>{props.answer3}</button>
        <button>{props.answer4}</button>
      </div>
    </section>
  );
}
