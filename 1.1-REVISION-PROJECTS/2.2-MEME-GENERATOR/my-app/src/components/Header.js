import trollIcon from "../images/troll-face.svg"

function Header() {
    // function handleLog(){
    //   const randomNum = Math.random();
    //   const imgObj = 
    //   console.log("Random num: ",randomNum);
    // }
    return (
      <nav className="header">
        {/* <img onPointerOver={handleLog} className="header--image" src={trollIcon}/> */}
        <img className="header--image" src={trollIcon}/>
        <h1 className="header--title">Meme Generator</h1>
        <h2 className="header--project">React Course - Project 3</h2>
      </nav>
    );
  }
  
  export default Header;