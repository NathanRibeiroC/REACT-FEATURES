/**
 * Declarative way
 */
ReactDOM.render(
  <h1 className="header">Hello, declarative</h1>,
  document.getElementById("root")
);

/**
 * Proposal
 *
 * Create new h1 element but do it on an imperative way
 *
 */

const h1 = document.createElement("h1");
h1.textContent = "This is am imperative way to program";
h1.className = "header";

//append h1 to the dom
document.getElementById("root").append(h1);
