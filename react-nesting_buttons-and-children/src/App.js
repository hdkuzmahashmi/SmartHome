import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Pink</Button>
      <Button>Blue</Button>
      <Button>Purple</Button>
      <Button>Black</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
