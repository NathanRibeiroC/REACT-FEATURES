import React from 'react';
import "../index.css";

/**
 * Component that represents the start page
 * @param {startQuizz} props 
 * @returns 
 */
export default function StartScreen(props) {
  return (
    <summary className="start--summary">
      <h1>Quizzical</h1>
      <h2>Infinity 5 question quizz</h2>
      <button onClick={() => props.startQuizz()}>Start Quiz</button>
    </summary>
  );
}
