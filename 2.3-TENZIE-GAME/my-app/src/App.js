import Dice from "./components/Dice";
import "./style.css";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [dicesArray, setDicesArray] = React.useState(
    allNewDice().map((rand) => ({ value: rand, isHeld: false, id: nanoid() }))
  );

  const [tenzies, setTenzies] = React.useState(false);

  const [numRolls, setNumRolls] = React.useState(0);

  const [timeTrack, setTimeTrack] = React.useState(new Date());

  React.useEffect(
    function () {
      for (let i = 0; i < dicesArray.length; i++) {
        if (i != dicesArray.length - 1) {
          console.log("ENTROU");
          if (dicesArray[i].isHeld !== dicesArray[i + 1].isHeld) {
            console.log("ENTROU1");
            setTenzies(false);
            break;
          }
          if (dicesArray[i].value !== dicesArray[i + 1].value) {
            setTenzies(false);
            break;
          }
          if (!dicesArray[i].isHeld) {
            setTenzies(false);
            break;
          }
        }
        setTenzies(true);
      }
      console.log("TENZIES", tenzies);
    },
    [dicesArray]
  );

  React.useEffect(
    function(){
      localStorage.setItem("timeRecord", Number.MAX_VALUE);
      localStorage.setItem("besTimeFormated", "")
    },[]
  );

  function allNewDice() {
    var arr = [];
    while (arr.length < 10) {
      var r = Math.floor(Math.random() * 6) + 1;
      arr.push(r);
    }
    return arr;
  }

  function verifyScore(value){
    var bestScore = localStorage.getItem("timeRecord");

    if(value < bestScore){
      localStorage.setItem("timeRecord", value);
      return true;
    }else{
      return false;
    }
  }

  function parseTime() {
    var finalDate = new Date();
    var msec = finalDate - timeTrack;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    var bestScore = verifyScore(msec);
    var timeFormated = "hh : " + hh + " mm: " + mm + " ss: " + ss;
    if(bestScore) localStorage.setItem("besTimeFormated", timeFormated);
    return timeFormated;
}

  function rollDice() {
    setDicesArray((prevSquares) =>
      prevSquares.map((square, index) => {
        const allNew = allNewDice();

        return square.isHeld ? square : { ...square, value: allNew[index] };
      })
    );

    setNumRolls(prevValue => prevValue+1);
  }
  
  function resetGame() {
    setDicesArray((prevSquares) =>
      prevSquares.map((square, index) => {
        const allNew = allNewDice();

        return !square.isHeld ? square : { ...square, value: allNew[index] , isHeld: false};
      })
    );

    setNumRolls(0);
  }
  
  function toogle(id) {
    setDicesArray((prevSquares) =>
      prevSquares.map((square) => {
        return square.id === id
          ? { ...square, isHeld: !square.isHeld }
          : square;
      })
    );
  }

  const dices = dicesArray.map((rand) => (
    // <Dice textValue={rand}/>
    <Dice
      textValue={rand.value}
      key={rand.id}
      toogleFunc={toogle}
      id={rand.id}
      isHeld={rand.isHeld}
    />
  ));

  return (
    <main className="main--container">
      <section className="sub--container">
        <h1>Tenzies <span className="winner--tag">{tenzies && ' - (YOU WON)'}</span></h1>
        <p>
          Roll until all dice are the same. Click <br />
          each die to freeze it at its current value
          <br />
          between rolls.
          <br/>       
        </p>
        <section className="button--section">{dices}</section>
        <button
          style={
            tenzies
              ? { backgroundColor: "green" }
              : { backgroundColor: "#5035FF" }
          }
          onClick={!tenzies ? rollDice : resetGame}
          className="roll--button"
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
        <footer>
          <p>
            <span><b>Num of rolls: </b>{numRolls}</span>
            {tenzies && <span><b> - Time track: </b>{parseTime()}</span>}
            {tenzies && <span><b> - Local Storage Best Time: </b>{localStorage.getItem("besTimeFormated")}</span>}
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
