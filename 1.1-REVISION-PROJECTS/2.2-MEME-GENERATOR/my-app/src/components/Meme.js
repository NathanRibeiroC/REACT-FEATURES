// React
import React from "react";

export default function Meme() {
  let url;
  let flag = true;

  const [allMemesImage, setAllMemeImages] = React.useState([]);
  const [memeImg, setMemeImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // React.useEffect(function() {
  //   console.log("Effect ran")
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(res => res.json())
  //   .then(data => console.log(data.data.memes))
  // },[])

  React.useEffect(function() {
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }
    getMemes()
  },[])

  console.log(allMemesImage)

  function getMemeImage() {
    const memesArray = allMemesImage;
    const randomNum = Math.floor(Math.random() * memesArray.length);

    url = allMemesImage[randomNum].url;
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
