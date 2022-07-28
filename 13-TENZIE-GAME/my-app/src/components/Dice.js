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
        <section>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
        <section>
          <span className="dot"></span>
          <span className="dot"></span>
        </section>
      </section>
    </button>
  );
}

export default Dice;
