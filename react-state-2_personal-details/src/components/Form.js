import { useState } from "react";
export default function Form({ onCreateUser }) {
  const [inputname, setInputName] = useState("");
  const [inputemail, setInputEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCreateUser(inputname, inputemail);
    setInputName("");
    setInputEmail("");
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        value={inputname}
        onChange={(event) => setInputName(event.target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        value={inputemail}
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
