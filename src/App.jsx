import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Tablas } from "./components/tablas/Tablas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tablas/>
    </>
  );
}

export default App;
