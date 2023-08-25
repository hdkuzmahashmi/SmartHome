import "./List.css";
import { uid } from "uid";
export default function List({ animals }) {
  return (
    <>
      <h2>Your animals:</h2>
      <ul className="animal-list">
        {animals.map((animal) => (
          <li key={uid()} className="animal-list__item">
            <h3>{animal.name}</h3>
            <span aria-label="emoji" className="animal-list__emoji">
              {animal.emoji}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
