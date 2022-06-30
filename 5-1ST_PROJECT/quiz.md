1. Why do we need to `import React from "react"` in our files?
To be able to use JSX (V)

2. If I were to console.log(page) in index.js, what would show up?
A JS object that is returned by JSX (V)

3. What's wrong with this code:
There is not a SINGLE parent element, instead there are two child elements
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means that all part of the logic  will be treated by the framework on the 
backend, that is the oposite of imperative where you especify the step by step of the logic.

5. What does it mean for something to be "composable"?
Means that you can divide it in  small pieces and use it according to the demand on a single file.
Ex:
Create components, load them on React DOM