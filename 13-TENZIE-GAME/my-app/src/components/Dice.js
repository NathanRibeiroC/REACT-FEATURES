import "../style.css";

function Dice(props) {

  function verifyDiceValue(diceValue){
    if(props.textValue === diceValue){
      return true;
    }else{
      return false;
    }
  }

  return (
    <button
      style={
        !props.isHeld
          ? { backgroundColor: "#FFFFFF" }
          : { backgroundColor: "#59E391" }
      }
      onClick={() => props.toogleFunc(props.id)}
      className="dice--button"
    >
      {verifyDiceValue(1) && <section className="face--one"></section>}

      {verifyDiceValue(2) && <section className="face--two">
        <span className="dot"></span>
        <span className="dot"></span>
      </section>}

      {verifyDiceValue(3) && <section className="face--three">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </section>}

      {verifyDiceValue(4) && <section className="face--four">
        <section>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
        <section>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
      </section>}

      {verifyDiceValue(5) && <section className="face--five">
        <section className="column1">
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
        <section className="column2">
          <span className="dot"></span>
        </section>
        <section className="column3">
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
      </section>}

      {verifyDiceValue(6) && <section className="face--six">
        <section className="column1">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
        <section className="column2">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
      </section>}

    </button>
  );
}

export default Dice;
