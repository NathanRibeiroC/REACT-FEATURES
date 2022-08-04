import "./index.css";
import StartScreen from "./components/StartScreen";
import React from "react";
import QuizzPage from "./components/QuizzPage";

export default function App() {
  /**
   * For 'false' --> doesn't starts quizz for 'true' --> starts quizz
   */
  const [startButtonState, setStartButtonState] = React.useState(false);

  /**
   * Function that toogles start button when start button is pressed
   */
  function startQuizz() {
    setStartButtonState((prevButtonValue) => !prevButtonValue);
  }

  return (
    <main>
      {/* <StartScreen startQuizz={startQuizz}/> */}
      <QuizzPage/>
    </main>
  );
}
