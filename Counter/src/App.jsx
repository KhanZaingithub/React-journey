import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div>
        <h2>Counter</h2>
      </div>
      <h5>{count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
