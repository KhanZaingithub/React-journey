import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(1);

  function increaseValue() {
    if (Counter == 20) {
      return;
    }
    setCounter(Counter + 1);
    // Cant change value by this
    // setCounter(Counter + 1);
    // setCounter(Counter + 1);

    setCounter((precounter) => precounter + 1);
  }
  function deacreaseValue() {
    if (Counter == 0) {
      return;
    }
    setCounter(Counter - 1);
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={increaseValue}>Increase counter value</button>
      <button onClick={deacreaseValue}>Decrease counter value</button>
    </>
  );
}

export default App;
