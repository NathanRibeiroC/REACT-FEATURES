import React from "react";
import WindowTracker from "./WindowTracker";

export default function Async() {
  const [show, setShow] = React.useState(true);

  function handleChange(){
    setShow(prevFormData => !prevFormData);
    console.log(show)
  }

  return (
    <div className="container">
      <button onClick={handleChange}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
