import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="Red" text="hit me" disabled={true} />;
}

function Button({ color, disabled, text }) {
  return (
    <button disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  );
}
