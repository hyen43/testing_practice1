import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

export function replaceCamelWithSpaces(color) {
  return color.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisAbled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : `${buttonColor}` }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisAbled(e.target.checked)}
      />
    </div>
  );
}

export default App;
