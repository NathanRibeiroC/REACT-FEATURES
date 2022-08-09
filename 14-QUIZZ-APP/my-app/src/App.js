import "./index.css";
import StartScreen from "./components/StartScreen";
import React from "react";
import QuizzPage from "./components/QuizzPage";

export default function App() {
  /**
   * For 'false' --> doesn't starts quizz for 'true' --> starts quizz
   */
  const [shouldStartGame, setShouldStartGame] = React.useState(false);

  /**
   * Function that toogles start button when start button is pressed
   */
  function startQuizz() {
    setShouldStartGame((prevButtonValue) => !prevButtonValue);
  }

  return (
    <main>
      {!shouldStartGame && <StartScreen startQuizz={startQuizz}/>}
      {shouldStartGame && <QuizzPage/>}
    </main>
  );
}
