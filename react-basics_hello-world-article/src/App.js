import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1> React Article</h1>
      <p> Learning React is fun !</p>
    </article>
  );
}
