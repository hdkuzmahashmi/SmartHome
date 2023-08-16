console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(name) {
  console.log(`Welcome ${name}! You are logged in now.`);
}
// named callback function
handleUserLogin(showWelcomeMessage);

// anonymous callback function
handleUserLogin(function (name) {
  console.log(`Welcome ${name}! You are logged in now.`);
});
