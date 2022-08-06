import React from "react";
import "../index.css";

export default function Question(props) {
  return (
    <section className="question--section">
      <h1>{props.question}</h1>
      <div className="buttons--div">
        <button
          style={
            props.butPressed1
              ? { backgroundColor: "#D6DBF5" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            props.selectAnOption(props.btn1Id, props.mainQuestionId)
          }
        >
          {props.answer1}
        </button>
        <button
          style={
            props.butPressed2
              ? { backgroundColor: "#D6DBF5" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            props.selectAnOption(props.btn2Id, props.mainQuestionId)
          }
        >
          {props.answer2}
        </button>
        <button
          style={
            props.butPressed3
              ? { backgroundColor: "#D6DBF5" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            props.selectAnOption(props.btn3Id, props.mainQuestionId)
          }
        >
          {props.answer3}
        </button>
        <button
          style={
            props.butPressed4
              ? { backgroundColor: "#D6DBF5" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            props.selectAnOption(props.btn4Id, props.mainQuestionId)
          }
        >
          {props.answer4}
        </button>
      </div>
      <hr className="hr--linediv" />
    </section>
  );
}
