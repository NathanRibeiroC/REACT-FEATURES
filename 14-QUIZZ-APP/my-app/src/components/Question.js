import React from "react";
import "../index.css";

export default function Question(props) {
  /**
   * Fisher-Yates Shuffle algorithm
   * @param {array to be shuffled} array
   * @returns
   */
  function shuffleQuestions(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledArray = shuffleQuestions([props.answer1C, props.answer2F, props.answer3F, props.answer4F])

  return (
    <section className="question--section">
      <h1>{props.question}</h1>
      <div className="buttons--div">
        <button onClick={() => props.selectAnOption(props.btn1Id, props.mainQuestionId)}>{shuffledArray[0]}</button>
        <button onClick={() => props.selectAnOption(props.btn2Id, props.mainQuestionId)}>{shuffledArray[1]}</button>
        <button onClick={() => props.selectAnOption(props.btn3Id, props.mainQuestionId)}>{shuffledArray[2]}</button>
        <button onClick={() => props.selectAnOption(props.btn4Id, props.mainQuestionId)}>{shuffledArray[3]}</button>
      </div>
      <hr className="hr--linediv"/>
    </section>
  );
}
