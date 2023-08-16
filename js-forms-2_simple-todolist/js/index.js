console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headlineInput = document.querySelector('[data-js="headline"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createItems(event.target.elements);
  form.reset();

  //  event.target.elements.headline.focus();
  //  event.target.elements[1].focus();

  headlineInput.focus();
});

function createItems(data) {
  //   create two items for headline and task seperately

  //   const liheadlineItem = document.createElement("li");
  //   liheadlineItem.textContent = `Headline: ${data.headline.value}`;
  //   const liTaskItem = document.createElement("li");
  //   liTaskItem.textContent = `Task: ${data.task.value}`;
  //   todoList.append(liheadlineItem, liTaskItem);

  // create one item for both headline and task

  const liItem = document.createElement("li");
  liItem.textContent = `Headline: ${data.headline.value} 
  Task: ${data.task.value} `;

  todoList.append(liItem);
}
