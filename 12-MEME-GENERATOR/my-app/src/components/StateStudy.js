// React
import React, { useState } from "react";

export default function StateStudy() {
  const [anyName, func] = React.useState("Yes");

  function handleClick() {
    func("No");
  }

  console.log(anyName);

  return (
    // <div className="state">
    //     <h1 className="state--title">Is state important to know?</h1>
    //     <div onClick={handleClick} className="state--value">
    //         <h1>{anyName}</h1>
    //     </div>
    // </div>
    <div className="counter">
      <button className="counter--minus">–</button>
      <div className="counter--count">
        <h1>0</h1>
      </div>
      <button className="counter--plus">+</button>
    </div>
  );
}
