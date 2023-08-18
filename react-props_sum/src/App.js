import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={500} valueB={40} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <span>
      {valueA} + {valueB} = {sum}
    </span>
  );
}
