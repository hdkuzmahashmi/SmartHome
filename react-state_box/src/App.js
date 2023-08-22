import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState(true);
  function handleClick() {
    setActive(!isActive);

    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
