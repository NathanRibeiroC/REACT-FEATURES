// React
import React from "react";
// Data
import memesData from "../memesData";

export default function Meme() {
  let url;

  const [imgUrl, setState] = React.useState("");
  // challenge
  // const [things, setThings] = React.useState(["Thing1","Thing2"])

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    url = memesData.data.memes[randomNum].url;
    setState(url);
    // challenge
    // const newThingText = `Thing${things.length + 1}`
    // setThings(prevState => [...prevState, newThingText])
  }

  // challenge
  // const thingsElements = things.map(thing => <p>key={thing}:{thing}</p>)

  return (
    <div className="form">
      <input className="form--input" placeholder="Top text" type="text"></input>
      <input
        className="form--input"
        placeholder="Bottom text"
        type="text"
      ></input>
      {/* <button onClick={handleClick} className="form--button"> */}
      <button onClick={getMemeImage} className="form--button">
        Get a new meme image &#128444;&#65039;
      </button>
      {{ imgUrl } && <img className="random--img" src={imgUrl} />}
    </div>
  );
}
