// call default export component
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";

// call named imports
import App from "./components/App/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
