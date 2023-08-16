console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

function showWelcomeMessage() {
  console.log("Called by named function : Welcome! You are logged in now.");
}
// named callback function
handleUserLogin(showWelcomeMessage);

//anonymous callback function
handleUserLogin(() => {
  console.log("Called by anonymous function : Welcome! You are logged in now.");
});

// callback function with eventhandler
const btn = document.querySelector('[data-js="save-btn"]');
btn.addEventListener("click", showWelcomeMessage);
