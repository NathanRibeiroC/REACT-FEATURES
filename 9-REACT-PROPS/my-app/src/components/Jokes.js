/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?

JOKES:

Setup: I got my daughter a fridge for her birthday.
Punchline: I can't wait to see her face light up when she opens it.

---

Setup: How did the hacker escape the police?
Punchline: He just ransomware!

---

Setup: Why don't pirates travel on mountain roads?
Punchline: Scurvy.

---

Setup: Why do bees stay in the hive in the winter?
Punchline: Swarm.

---

Setup: What's the best thing about Switzerland?
Punchline: I don't know, but the flag is a big plus!
*/

import React from "react";
// Stylesheet
import "../style.css";

export default function Contact(props) {
    return (
      <section className="joke--section">
        {/* {props.setup && <h1>Setup: {props.setup}</h1>} */}
        <h1>Setup: {props.setup}</h1>
        <p>Punchline: {props.punchline}</p>
      </section>
    )
  }
  