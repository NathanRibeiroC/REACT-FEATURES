import trollIcon from "../images/troll-face.svg"

function Header() {
    return (
      <nav className="header">
        <img className="header--image" src={trollIcon}/>
        <h1 className="header--title">Meme Generator</h1>
        <h2 className="header--project">React Course - Project 3</h2>
      </nav>
    );
  }
  
  export default Header;