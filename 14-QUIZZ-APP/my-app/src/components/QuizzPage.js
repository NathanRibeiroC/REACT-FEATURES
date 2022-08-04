import React from "react";
import "../index.css";
import Question from "./Question";

export default function QuizzPage() {
  const [questAndAnsw, setQuestAndAnsw] = React.useState("");

  // will search for data only after the first load
  React.useEffect(function () {
    console.log("Effect ran");
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json()) //res is passed as data to the then below
      .then((data) => console.log(data));

    // console.log(questAndAnsw);
    // console.log("FETCH RESULT: ", typeof(questAndAnsw.results));
    // var result = Object.keys(questAndAnsw.results).map((key) => [Number(key), questAndAnsw.results[key]]);
    // console.log('RESULT: ',result[0][1].question);
    // console.log('DECODED: ',decodeURI(result[0][1].question));
  }, []);

  // const questions = questAndAnsw.results[0].map((square) => (
  // //   <Question
  // //   answer1={"A"}
  // //   answer2={"B"}
  // //   answer3={"C"}
  // //   answer4={"D"}
  // //   question={square.results[0].question}
  // // />
  // console.log(square)
  // ));

  return (
    <section className="quizz--section">
      {/* {questions} */}
    </section>
  );
}
