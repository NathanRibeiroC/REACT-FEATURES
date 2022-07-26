import Dice from "./components/Dice";
import "./style.css";

function App() {
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
        <section className="button--section">
          <Dice textValue={1}/>
          <Dice textValue={2}/>
          <Dice textValue={3}/>
          <Dice textValue={4}/>
          <Dice textValue={5}/>
          <Dice textValue={6}/>
          <Dice textValue={1}/>
          <Dice textValue={2}/>
        </section>
      </section>
    </main>
  );
}

export default App;
