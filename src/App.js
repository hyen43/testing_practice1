import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisAbled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: `${buttonColor}` }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={() => setDisAbled(!disabled)} />
    </div>
  );
}

export default App;
