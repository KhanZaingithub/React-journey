import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerated = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) {
      str += "@#%";
    }
    if (numberAllowed) {
      str += "0123456789";
    }
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    passwordGenerated();
  }, [length, charAllowed, numberAllowed, passwordGenerated]);

  // copy to clipboard
  const copyClipboard = useRef(null);
  const copied = useCallback(() => {
    copyClipboard.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div>
        <h2 className="text-4xl">Password</h2>
      </div>
      <div className=" mt-4 flex items-center space-x-2 justify-center">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
          ref={copyClipboard}
        />
        <button
          onClick={copied}
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Copy
        </button>
      </div>
      <div className="mt-4 gap-4 flex items-center space-x-2 justify-center">
        <div className="flex gap-3 items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label
            htmlFor="rangeInput"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Length: {length}
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((preNumber) => !preNumber)}
          />
          <label className="ml-2 text-sm text-gray-700">Number</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prevoius) => !prevoius)}
          />
          <label className="ml-2 text-sm text-gray-700">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
