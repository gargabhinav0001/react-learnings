import React from "react";
import ReactDOM from "react-dom/client";

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {}, " this is heading");

const headingJSX = <h1>This is jsx heading in React!</h1>;

ROOT.render(heading1);

console.log(heading1, headingJSX);
