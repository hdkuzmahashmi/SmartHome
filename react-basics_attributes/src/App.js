import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Article />
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">React Article</h2>
      <label htmlFor="name">Search</label>
      <input id="name"></input>
      <h4> Tutorials</h4>
      <ul>
        <li>
          <a
            className="article__link"
            target="blank"
            href="https://www.w3schools.com/REACT/DEFAULT.ASP"
          >
            {" "}
            Handouts
          </a>
        </li>
        <li>
          <a
            className="article__link"
            target="blank"
            href="https://www.w3schools.com/REACT/DEFAULT.ASP"
          >
            {" "}
            Exc
          </a>
        </li>
      </ul>
    </article>
  );
}
