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
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesArray = allMemesImage.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);

    url = allMemesImage.data.memes[randomNum].url;
    setMemeImg((prevImg) => ({
      ...prevImg, //without this all the content will be erased
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setAllMemeImages((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    console.log(allMemesImage);
  }

  return (
    <main>
      {" "}
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          onChange={handleChange}
          name="topText"
          value={allMemesImage.topText}
        ></input>
        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={allMemesImage.bottomText}
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image &#128444;&#65039;
        </button>
      </div>
      <div className="meme">
        <img src={memeImg.randomImage} className="meme--image" />
        <h2 className="meme--text top">{allMemesImage.topText}</h2>
        <h2 className="meme--text bottom">{allMemesImage.bottomText}</h2>
      </div>
    </main>
  );
}
