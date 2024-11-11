import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./contest/theme";
import ThemeBtn from "./Components/Themebtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("dark");
  const darkmode = () => {
    setthemeMode("dark");
  };
  const lightmode = () => {
    setthemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkmode, lightmode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
