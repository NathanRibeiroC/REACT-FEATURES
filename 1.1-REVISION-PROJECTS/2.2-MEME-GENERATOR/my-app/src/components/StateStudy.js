// React
import React, { useState } from "react";

export default function StateStudy() {

  const [count, func] = React.useState(0);

  const [thingsArray, setThingsArray] = React.useState(["Thing1","Thing2"]);

  function addClick() {
    func(prevState => prevState+1)
  }

  function menusClick(){
    func(prevState => prevState-1)
  }

  function pushArray(){
    setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length}`])
  }
  // console.log(anyName);

  return (
    // <div className="state">
    //     <h1 className="state--title">Is state important to know?</h1>
    //     <div onClick={handleClick} className="state--value">
    //         <h1>{anyName}</h1>
    //     </div>
    // </div>
    <div className="counter">
      <button onClick={menusClick} className="counter--minus">–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={addClick} className="counter--plus">+</button>
    </div>
  );
}
