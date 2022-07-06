import React from "react";
// Stylesheet
import "../style.css";

export default function Map() {
    const colors = [<h3>Red</h3>, <h3>Orange</h3>, <h3>Yellow</h3>, <h3>Green</h3>, <h3>Blue</h3>, <h3>Indigo</h3>, <h3>Violet</h3>];
    return (
        <div>
            {colors}
        </div>
    )
  }