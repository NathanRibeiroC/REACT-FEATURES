import React from "react";
import "../index.css";
import Question from "./Question";

export default function QuizzPage() {
  /**
   * State that represents the questions and answers
   */
  const [questAndAnsw, setQuestAndAnsw] = React.useState([]);
  //TODO: STOPPED HERE
  const [questAndAnsw1, setQuestAndAnsw1] = React.useState([]);


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
    const fetchedResult = objectToArray(otbObj);
    setQuestAndAnsw(fetchedResult);
  };

  /**
   * Called every first load to fetch 5 random questions
   * from otb api
   */
  React.useEffect(function () {
    parseFetchAsync();
  }, []);

  /**
   * Fisher-Yates Shuffle algorithm
   * @param {array to be shuffled} array 
   * @returns 
   */
  function shuffleQuestions(array){
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const questions = questAndAnsw.map((square) => (
    <Question
      answer1={"A"}
      answer2={"B"}
      answer3={"C"}
      answer4={"D"}
      question={decodeURIComponent(square[1].question)}
    />
  ));



  return (
    <section className="quizz--section">
      {questions}
    </section>
  );
}
