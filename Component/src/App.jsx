import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    heading: "Jeans",
    stock: "available",
  };

  return (
    <>
      <Card heading="Jeans" stock="available" />
      <Card objCombine={obj} heading="Jeans" stock="not available" />
    </>
  );
}

export default App;
