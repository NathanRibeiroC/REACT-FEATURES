import Dice from "./components/Dice";
import "./style.css";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [dicesArray, setDicesArray] = React.useState(
    allNewDice().map((rand) => ({ value: rand, isHeld: false, id: nanoid() }))
  );

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(
    function () {
      for (let i = 0; i < dicesArray.length; i++) {
        if (i != dicesArray.length - 1) {
          console.log("ENTROU");
          if (dicesArray[i].isHeld != dicesArray[i + 1].isHeld) {
            console.log("ENTROU1");
            setTenzies(false);
            break;
          }
          if (dicesArray[i].value != dicesArray[i + 1].value) {
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
  
  function resetGame() {
    console.log('trying to reset')
    setDicesArray((prevSquares) =>
      prevSquares.map((square, index) => {
        const allNew = allNewDice();

        return !square.isHeld ? square : { ...square, value: allNew[index] , isHeld: false};
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
          <br />
          <br />
          {tenzies && <span><b>You Won!</b></span>}          
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
      </section>
    </main>
  );
}

export default App;
