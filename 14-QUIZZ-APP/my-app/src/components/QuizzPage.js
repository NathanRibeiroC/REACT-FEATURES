import React from "react";
import "../index.css";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuizzPage() {
  /**
   * State that represents the questions and answers
   */
  const [questionStates, setQuestionStates] = React.useState([]);

  const [shouldSubmitQuestions, setShouldSubmitQuestions] =
    React.useState(false);
    
  const [numberOfRightAnswers, setNumberOfRightAnswers] =
      React.useState(0);
    /**
   * Converts object type to array type in order
   * code can iterate over it
   * @param {object type data} data
   * @returns
   */
  function objectToArray(data) {
    let newArray = [];
    newArray = Object.keys(data).map((key) => [Number(key), data[key]]);
    return newArray;
  }

  /**
   * Fetch request
   */
  const otbFetch = fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
    .then((response) => response.json())
    .then((user) => {
      return user.results;
    });

  /**
   * Fisher-Yates Shuffle algorithm
   * @param {array to be shuffled} array
   * @returns
   */
  function shuffleQuestions(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
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

  /**
   * Async wait for fetch request result
   */
  const parseFetchAsync = async () => {
    //fetches asyncronously 5 questions from otb api
    const otbObj = await otbFetch;

    //converts fetched data from object --> array
    const fetched = objectToArray(otbObj);

    //update state based on fetched data
    fetched.map((feRes) => {
      setQuestionStates((prev) => {
        //shuffles questions when assigning state, in order correct answer is not always on the same position
        const shuffledQuestions = shuffleQuestions([
          feRes[1].correct_answer,
          feRes[1].incorrect_answers[0],
          feRes[1].incorrect_answers[1],
          feRes[1].incorrect_answers[2],
        ]);

        return [
          ...prev,
          {
            id: nanoid(),
            question: decodeURIComponent(feRes[1].question),
            alternative1: decodeURIComponent(shuffledQuestions[0]),
            alternative2: decodeURIComponent(shuffledQuestions[1]),
            alternative3: decodeURIComponent(shuffledQuestions[2]),
            alternative4: decodeURIComponent(shuffledQuestions[3]),
            isButton1Pressed: false,
            isButton2Pressed: false,
            isButton3Pressed: false,
            isButton4Pressed: false,
            button1Id: nanoid(),
            button2Id: nanoid(),
            button3Id: nanoid(),
            button4Id: nanoid(),
            isButton1HoldingRightAnswer:
              decodeURIComponent(feRes[1].correct_answer) ===
              decodeURIComponent(shuffledQuestions[0]),
            isButton2HoldingRightAnswer:
              decodeURIComponent(feRes[1].correct_answer) ===
              decodeURIComponent(shuffledQuestions[1]),
            isButton3HoldingRightAnswer:
              decodeURIComponent(feRes[1].correct_answer) ===
              decodeURIComponent(shuffledQuestions[2]),
            isButton4HoldingRightAnswer:
              decodeURIComponent(feRes[1].correct_answer) ===
              decodeURIComponent(shuffledQuestions[3]),
          },
        ];
      });
    });
  };

  /**
   * Called every first load to fetch 5 random questions
   * from otb api
   */
  React.useEffect(function () {
    parseFetchAsync();
  }, []);

  /**
   * Manages alternative selection, chainging isButton<num>Pressed state
   * @param {BUTTON ID} btnId
   * @param {ID OF THE QUESTION COMPONENT} key
   */
  function selectAnOption(btnId, key) {
    let aux = [];
    questionStates.map((quesRes) => {
      if (quesRes.id === key) {
        if (quesRes.button1Id === btnId) {
          console.log("BTN 1 CLICKED");
          aux.push({
            ...quesRes,
            isButton1Pressed: !quesRes.isButton1Pressed,
            isButton2Pressed: false,
            isButton3Pressed: false,
            isButton4Pressed: false,
          });
        }
        if (quesRes.button2Id === btnId) {
          console.log("BTN 2 CLICKED");
          aux.push({
            ...quesRes,
            isButton2Pressed: !quesRes.isButton2Pressed,
            isButton1Pressed: false,
            isButton3Pressed: false,
            isButton4Pressed: false,
          });
        }
        if (quesRes.button3Id === btnId) {
          console.log("BTN 3 CLICKED");
          aux.push({
            ...quesRes,
            isButton3Pressed: !quesRes.isButton3Pressed,
            isButton1Pressed: false,
            isButton2Pressed: false,
            isButton4Pressed: false,
          });
        }
        if (quesRes.button4Id === btnId) {
          console.log("BTN 4 CLICKED");
          aux.push({
            ...quesRes,
            isButton4Pressed: !quesRes.isButton4Pressed,
            isButton1Pressed: false,
            isButton2Pressed: false,
            isButton3Pressed: false,
          });
        }
      } else {
        aux.push({ ...quesRes });
      }
    });
    setQuestionStates(aux);
  }

  console.log("QUESTION STATE: ", questionStates);
  console.log("CHECK STATE: ", shouldSubmitQuestions);

  /**
   * Loads Question component that is composed mainly by default
   * by 5 alternatives an one h1 header with the question
   */
  const questions = questionStates.map((quesRes) => (
    <Question
      answer1={quesRes.alternative1}
      answer2={quesRes.alternative2}
      answer3={quesRes.alternative3}
      answer4={quesRes.alternative4}
      butPressed1={quesRes.isButton1Pressed}
      butPressed2={quesRes.isButton2Pressed}
      butPressed3={quesRes.isButton3Pressed}
      butPressed4={quesRes.isButton4Pressed}
      btn1Id={quesRes.button1Id}
      btn2Id={quesRes.button2Id}
      btn3Id={quesRes.button3Id}
      btn4Id={quesRes.button4Id}
      selectAnOption={selectAnOption}
      question={quesRes.question}
      key={quesRes.id}
      mainQuestionId={quesRes.id}
      showAnswersResults={shouldSubmitQuestions}
      isAnsBtn1Right = {quesRes.isButton1HoldingRightAnswer}
      isAnsBtn2Right = {quesRes.isButton2HoldingRightAnswer}
      isAnsBtn3Right = {quesRes.isButton3HoldingRightAnswer}
      isAnsBtn4Right = {quesRes.isButton4HoldingRightAnswer}
    />
  ));

  function countRightAnswers(){
    let countRightAnswers = 0

    function iterateThroughState(questState){
      if((questState.isButton1Pressed && questState.isButton1HoldingRightAnswer) ||  (questState.isButton2Pressed && questState.isButton2HoldingRightAnswer) || (questState.isButton3Pressed && questState.isButton3HoldingRightAnswer) || (questState.isButton4Pressed && questState.isButton4HoldingRightAnswer)){
        countRightAnswers++
      }
    }
    questionStates.forEach(iterateThroughState);

    setNumberOfRightAnswers(countRightAnswers)
  }

  /**
   * Data critics to verify if it is possible to proceed
   * to answers verifications
   */
  function checkIfAllAlternativesWereSelected() {
    let existQuestionNotSelected = false;

    function isThereSomeQuestionNotSelected(element) {
      console.log("ENTERED");
      console.log(
        element.isButton1Pressed,
        element.isButton2Pressed,
        element.isButton3Pressed,
        element.isButton4Pressed
      );
      if (
        !element.isButton1Pressed &&
        !element.isButton2Pressed &&
        !element.isButton3Pressed &&
        !element.isButton4Pressed
      ) {
        console.log("SETTED");
        existQuestionNotSelected = true;
      }
    }

    questionStates.forEach(isThereSomeQuestionNotSelected);

    if (existQuestionNotSelected) {
      alert(
        "Please mark all questions before trying to check the answers again"
      );
    } else {
      setShouldSubmitQuestions(true);
      countRightAnswers();
    }

    console.log("QUESTIONS SUBMIT STATES: ", shouldSubmitQuestions);
  }

  return (
    <section className="quizz--section">
      {questions}
        {shouldSubmitQuestions && <h1>You scored {numberOfRightAnswers}/5 correct answers</h1>}
        <button
          onClick={checkIfAllAlternativesWereSelected}
          className="manager--button"
        >
          {shouldSubmitQuestions ? "Play Again" : "Check answers"}
        </button>

    </section>
  );
}
