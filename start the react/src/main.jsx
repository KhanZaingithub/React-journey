import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Test from "./test.jsx";

function Text2() {
  return <h2>Test 2 is executed</h2>;
}

// const reactElement = {
//   type: "a",
//   properties: {
//     href: "https://www.google.com/",
//   },
//   children: "Click me to visit google",
// };

const anotherElm = React.createElement(
  'a',
  { href: "https://www.google.com/" },
  "Click me to visit google"
);

createRoot(document.getElementById("root")).render(anotherElm);
