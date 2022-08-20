import React from "react";
import "../index.css";

export default function Question(props) {
  const lightGreenColor = "#94D7A2"
  const lightRedColor = "#E8CDCF"
  const whiteColor = "white"
  const lightPurpleColor = "#D6DBF5"
  return (
    <section className="question--section">
      <h1>{props.question}</h1>
      <div className="buttons--div">
        {!(props.answer1 === "undefined") &&
          <button

            style={
              props.showAnswersResults ? 
              (props.butPressed1 ? 
                  (props.isAnsBtn1Right ? { backgroundColor: lightGreenColor}
                                  : { backgroundColor:lightRedColor}) 
              : (props.isAnsBtn1Right ? { backgroundColor:lightGreenColor}
                                : { backgroundColor:whiteColor})) 
          : (props.butPressed1 ? { backgroundColor:lightPurpleColor }
                         : { backgroundColor:whiteColor})
            }
            onClick={() =>
              props.selectAnOption(props.btn1Id, props.mainQuestionId)
            }
          >
            {props.answer1}
          </button>
        }
        {!(props.answer2 === "undefined") &&
          <button
            style={
              props.showAnswersResults ? 
              (props.butPressed2 ? 
                  (props.isAnsBtn2Right ? { backgroundColor:lightGreenColor}
                                  : { backgroundColor:lightRedColor}) 
              : (props.isAnsBtn2Right ? { backgroundColor:lightGreenColor }
                                : { backgroundColor:whiteColor})) 
          : (props.butPressed2 ? { backgroundColor:lightPurpleColor}
                         : { backgroundColor:whiteColor})
            }
            onClick={() =>
              props.selectAnOption(props.btn2Id, props.mainQuestionId)
            }
          >
            {props.answer2}
          </button>
        }
        {!(props.answer3 === "undefined") &&
          <button
            style={
              props.showAnswersResults ? 
              (props.butPressed3 ? 
                  (props.isAnsBtn3Right ? { backgroundColor:lightGreenColor}
                                  : { backgroundColor:lightRedColor}) 
              : (props.isAnsBtn3Right ? { backgroundColor:lightGreenColor}
                                : { backgroundColor:whiteColor})) 
          : (props.butPressed3 ? { backgroundColor:lightPurpleColor}
                         : { backgroundColor:whiteColor})
            }
            onClick={() =>
              props.selectAnOption(props.btn3Id, props.mainQuestionId)
            }
          >
            {props.answer3}
          </button>
        }
        {!(props.answer4 === "undefined") &&
          <button
            style={
              props.showAnswersResults ? 
              (props.butPressed4 ? 
                  (props.isAnsBtn4Right ? { backgroundColor:lightGreenColor}
                                  : { backgroundColor:lightRedColor}) 
              : (props.isAnsBtn4Right ? { backgroundColor:lightGreenColor}
                                : { backgroundColor:whiteColor})) 
          : (props.butPressed4 ? { backgroundColor:lightPurpleColor}
                         : { backgroundColor:whiteColor})
            }
            onClick={() =>
              props.selectAnOption(props.btn4Id, props.mainQuestionId)
            }
          >
            {props.answer4}
          </button>
        }
      </div>
      <hr className="hr--linediv" />
    </section>
  );
}
