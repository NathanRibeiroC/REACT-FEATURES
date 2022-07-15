import React from "react";
import Joke from "./exercicios/ExJokes";
import jokesData from "./exercicios/jokesData";
import Form from "./exercicios/FORM/Form";

export default function App() {
  const [messages, setMessages] = React.useState(["a"]);
  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */
  return (
    // <div>
    //   {/* {(messages.length>0) && <h1>You have {messages.length} unread messages!</h1>} */}
    //   <h1>
    //     {messages.length > 0
    //       ? `You have ${messages.length} unread message` +
    //         (messages.length === 1 ? `` : `(s)`)
    //       : `You're caught up!`}
    //   </h1>
    // </div>
//     <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
<Form/>
  );
  // const jokeElements = jokesData.map(joke => {
  //     return (
  //         <Joke
  //             key={joke.id}
  //             setup={joke.setup}
  //             punchline={joke.punchline}
  //         />
  //     )
  // })
  // return (
  //     <div>
  //         {jokeElements}
  //     </div>
  // )
}
