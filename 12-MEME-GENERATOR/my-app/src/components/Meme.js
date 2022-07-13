// React
import React from "react";
// Data
import memesData from "../memesData";

export default function Meme() {
  let url;
  let flag = true;

  const [allMemesImage, setAllMemeImages] = React.useState(memesData);
  const [memeImg, setMemeImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
});

  // const [isGoingOut, setState1] = React.useState(true);
  // challenge
  // const [things, setThings] = React.useState(["Thing1","Thing2"])

  function getMemeImage() {
    const memesArray = allMemesImage.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    url = allMemesImage.data.memes[randomNum].url;
    setMemeImg(prevImg => ({...prevImg, //without this all the content will be erased
      randomImage: url
    }))

    // challenge
    // const newThingText = `Thing${things.length + 1}`
    // setThings(prevState => [...prevState, newThingText])
  }

  // function toggleState(){
  //   setState1(isGoingOut => !isGoingOut)
  // }

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
      {memeImg.randomImage && <img className="random--img" src={memeImg.randomImage} />}
      {/* <div onClick={toggleState}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div> */}
    </div>
  );
}
