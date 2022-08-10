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

//Challenge create a navbar using JSX
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"));