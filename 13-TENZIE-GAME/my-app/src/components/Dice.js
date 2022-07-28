import "../style.css";

function Dice(props) {
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
      {/* <section className="face--one">
      </section> */}

      {/* <section className="face--two">
        <span className="dot"></span>
        <span className="dot"></span>
      </section> */}

      {/* <section className="face--three">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </section> */}

      <section className="face--four">
        <div className="column1">
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
        <div className="column2">
          <span className="dot3"></span>
          <span className="dot4"></span>
        </div>
      </section>
    </button>
  );
}

export default Dice;
