import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/login";
import Profile from "./Components/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h2>Zainul khan</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
