import React from "react";
import "../index.css";
import Question from "./Question";
import { nanoid } from 'nanoid';

export default function QuizzPage() {
  /**
   * State that represents the questions and answers
   */
  const [questionStates, setQuestionStates] = React.useState([]);

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
   * Fecth request
   */
  const otbFetch = fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
    .then((response) => response.json())
    .then((user) => {
      return user.results;
    });
  
  /**
   * Async wait for fetch request result
   */
  const parseFetchAsync = async () => {
    const otbObj = await otbFetch;
    const fetched = objectToArray(otbObj);
    // console.log('FETCHED: ',fetched);
    fetched.map((feRes)=>{
      setQuestionStates((prev) => { return(
        [...prev, 
        {
          id: nanoid(),
          question: decodeURIComponent(feRes[1].question),
          correctAlternative : decodeURIComponent(feRes[1].correct_answer),
          incorrectAlternative1 : decodeURIComponent(feRes[1].incorrect_answers[0]),
          incorrectAlternative2 : decodeURIComponent(feRes[1].incorrect_answers[1]),
          incorrectAlternative3 : decodeURIComponent(feRes[1].incorrect_answers[2]),
          isButton1Pressed: false,
          isButton2Pressed: false,
          isButton3Pressed: false,
          isButton4Pressed: false,
          button1Id: nanoid(),
          button2Id: nanoid(),
          button3Id: nanoid(),
          button4Id: nanoid()
        }]);
      })
    });
    // setfetchResult(fetched);
  };

  /**
   * Called every first load to fetch 5 random questions
   * from otb api
   */
  React.useEffect(function () {
    parseFetchAsync();
  }, []);

  React.useEffect(function () {
    console.log(questionStates)
  }, [questionStates]);

  function selectAnOption(btnId, key){
    questionStates.map((quesRes)=>{
      if(quesRes.id === key){
        if(quesRes.button1Id === btnId){
          setQuestionStates((prev) => ({
            button1Id: [...prev, {button1Id: !prev.button1Id}]
          }))
        }
        if(quesRes.button2Id === btnId){
          console.log('BTN 2 CLICKED');
        }
        if(quesRes.button3Id === btnId){
          console.log('BTN 3 CLICKED')
        }
        if(quesRes.button4Id === btnId){
          console.log('BTN 4 CLICKED')
        }
      }
    });
  }

  console.log('QUESTION STATE: ',questionStates);

  const questions = questionStates.map((quesRes) => (
    <Question
      answer1C={quesRes.correctAlternative}
      answer2F={quesRes.incorrectAlternative1}
      answer3F={quesRes.incorrectAlternative2}
      answer4F={quesRes.incorrectAlternative3}
      butPressed1 = {quesRes.isButton1Pressed}
      butPressed2 = {quesRes.isButton2Pressed}
      butPressed3 = {quesRes.isButton3Pressed}
      butPressed4 = {quesRes.isButton4Pressed}
      btn1Id = {quesRes.button1Id}
      btn2Id = {quesRes.button2Id}
      btn3Id = {quesRes.button3Id}
      btn4Id = {quesRes.button4Id}
      selectAnOption={selectAnOption}
      question={quesRes.question}
      key={quesRes.id}
      mainQuestionId={quesRes.id}
    />
  ));

  return (
    <section className="quizz--section">
      {questions}
    </section>
  );
}
