//File called Header.js
//File name must starts with capital letter
export default function HeaderComponent() {
    return (
      <header>
        <nav className="nav">
          <img
            className="nav-logo"
            src="react-removebg-preview.png"
            alt="react logo"
          />
          <ul className="nav-items">
            <li>Tools</li>
            <li>View</li>
            <li>Log out</li>
          </ul>
        </nav>
      </header>
    );
  }

//if this one is the only component i have inside this file-


//OR
// export default function HeaderComponent() {
//     return (
//       <header>
//         <nav className="nav">
//           <img
//             className="nav-logo"
//             src="react-removebg-preview.png"
//             alt="react logo"
//           />
//           <ul className="nav-items">
//             <li>Tools</li>
//             <li>View</li>
//             <li>Log out</li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }