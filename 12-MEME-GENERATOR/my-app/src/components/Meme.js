export default function Meme() {
  return (
    <form className="form">
      <input className="form--input" placeholder="Top text" type="text"></input>
      <input
        className="form--input"
        placeholder="Bottom text"
        type="text"
      ></input>
      <button className="form--button">Get a new meme image &#128444;&#65039;</button>
    </form>
  );
}
