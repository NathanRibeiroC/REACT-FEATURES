// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// //JSX
// //CAN PUT ONLY ONE CHILD ELEMENT IF MORE THAN ONE IS NECESSARY, USE <div>
// // ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(page, document.getElementById("root"));

//the objective of this exercise is to remember that JSX returns JS objects, this
//example doesnt load something
// document.getElementById("root").append(JSON.stringify(page));

/**
 * @author MYSELF
 */
//Challenge create a navbar using JSX
// const header = (
//   <header>
//     <img
//       src="react-removebg-preview.png"
//       alt="react logo"
//       width="90"
//       height="60"
//     />
//   </header>
// );

// const body = (
//   <div>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K starts on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(header, document.getElementById("header"));

// ReactDOM.render(body, document.getElementById("body"));

/**
 * @author TEACHER
 */

// const page = (
//   <div>
//     <img src="react-removebg-preview.png" width="80px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K starts on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

/**
 * @description lesson about components and reusability,
 * way of creating our own components
 * @rules use PascalCase
 */
// function PageComponent() {
//   return (
//     <div>
//       <img src="react-removebg-preview.png" width="80px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K starts on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<PageComponent/>, document.getElementById("root"));

/**
 * @description PART-1: challenge, create <ol> and load it to React DOM
 */

function AbcOrderedList() {
  return (
    <ol>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
    </ol>
  );
}

/**
 * @description PART2
 */
/*
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
*/
function HeaderComponent() {
  return (
    <header>
      <nav>
        <img
          src="react-removebg-preview.png"
          alt="react logo"
          width="90"
          height="60"
        />
        <h1>ABC unordered list</h1>
      </nav>
    </header>
  );
}

function FooterComponent() {
  return (
    <footer>
       <small>© 20xx Nathanzeira development. All rights reserved.</small>
    </footer>
  );
}

/**
 * @description CHALLENGE: PARENT AND CHILD COMPONENT
 */

 function AbcOrderedListParent() {
  return (
    <ol>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
    </ol>
  );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));
ReactDOM.render(<AbcOrderedList />, document.getElementById("root"));
ReactDOM.render(<FooterComponent />, document.getElementById("footer"));
