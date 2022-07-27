import Dice from "./components/Dice";
import "./style.css";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [dicesArray, setDicesArray] = React.useState(
    allNewDice().map((rand) => ({ value: rand, isHeld: false, id: nanoid() }))
  );

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(function () {
    console.log("State Changed")
  }, [dicesArray]);

  function allNewDice() {
    var arr = [];
    while (arr.length < 10) {
      var r = Math.floor(Math.random() * 6) + 1;
      arr.push(r);
    }
    return arr;
  }

  function rollDice() {
    setDicesArray((prevSquares) =>
      prevSquares.map((square, index) => {
        const allNew = allNewDice();

        return square.isHeld ? square : { ...square, value: allNew[index] };
      })
    );
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
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click <br />
          each die to freeze it at its current value
          <br />
          between rolls.
        </p>
        <section className="button--section">{dices}</section>
        <button onClick={rollDice} className="roll--button">
          Roll
        </button>
      </section>
    </main>
  );
}

export default App;
