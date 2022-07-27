import "../style.css";

function Dice(props) {
  return (
    <button style={!props.isHeld ? {backgroundColor: "#FFFFFF"} : {backgroundColor: "#59E391"}} onClick={() => props.toogleFunc(props.id)} className="dice--button">{props.textValue}</button>
  );
}

export default Dice;