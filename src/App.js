import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonText, setButtonText] = useState("Change to blue");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const newButtonText =
    buttonColor === "red" ? "Change to red" : "Change to blue";

  const handleClick = () => {
    setButtonColor(newButtonColor);
    setButtonText(newButtonText);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: `${buttonColor}` }}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default App;
