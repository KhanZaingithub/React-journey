import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen transition duration:200 flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 px-2 bg-grey ">
          <div className="flex flex-wrap bg-white gap-5 p-2 rounded-xl ">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button style={{ backgroundColor: "red" }}>red</button>
            <button style={{ backgroundColor: "red" }}>red</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
