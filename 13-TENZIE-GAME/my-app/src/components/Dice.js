import "../style.css";

function Dice(props) {
  return (
    <button className="dice--button">{props.textValue}</button>
  );
}

export default Dice;