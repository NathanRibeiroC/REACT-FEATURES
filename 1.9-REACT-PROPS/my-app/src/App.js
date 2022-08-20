import React from "react";
// Stylesheet
import "./style.css";
// Components
import Contact from "./components/Contact";
import Joke from "./components/Jokes"
import Map from "./components/Map"
// Images
import Cat1 from "./images/cat1.jpg"
import Cat2 from "./images/cat2.jpg";
import Cat3 from "./images/cat3.jpg";
import Cat4 from "./images/cat4.jpg";
//Data
import jokesData from "./jokesData";

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <div>
      {/* <Contact img={Cat1} name="Mr. Cat" phone="(212) 555-1234" email="cat@gmail.com"/>
      <Contact img={Cat2} name="Mr. Vladhovic" phone="(35) 999-000" email="vlad@catmail.com"/>
      <Contact img={Cat3} name="Mr. Silva" phone="(51) 888-000" email="silvs@meow.com"/>
      <Contact img={Cat4} name="Mr. Ronaldeski" phone="(37) 777-000" email="rona@gmail.com"/> */}
      {/* <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."/>
      <Joke punchline="I can't wait to see her face light up when she opens it."/>
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Joke setup={100} punchline="Scurvy."/>
      <Joke setup={true} punchline="Scurvy."/>
      <Joke setup={[{author:"",body:"",title:""}]} punchline="Scurvy."/>
      <Joke setup="Why do bees stay in the hive in the winter?" punchline="Swarm."/> */}
      {/* <Map/> */}
      {jokeElements}
    </div>
  );
}
