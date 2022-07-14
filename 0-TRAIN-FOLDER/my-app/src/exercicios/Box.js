import React from "react";

export default function Box(props) {
//   const [colorState, setColorState] = React.useState(props.on);

//   function flipColor() {
//     setColorState((prevState) => !prevState);
//   }

//   const styles = {
//     backgroundColor: colorState ? "#222222" : "transparent",
//   };

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

//   return <div className="box" style={styles} onClick={flipColor}></div>;

  return (
    <div
      style={styles}
      className="box"
      onClick={props.toggle}
    ></div>
  );
}
