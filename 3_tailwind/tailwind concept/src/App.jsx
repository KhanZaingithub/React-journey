import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const arr = [1, 2, 3];
  const obj = {
    car: "red",
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card productName="macks book" myobj={obj} />
      <Card productName="mack book" />
      <Card />
    </>
  );
}

export default App;
