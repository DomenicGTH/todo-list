const todoinput = document.querySelector(".todo");
const todoButton = document.querySelector(".todobtn");
const todoList = document.querySelector(".list");

todoButton.addEventListener("click", addTodo);

// const addTodo = (e) => {
//   e.preventDefault();
//   const div = document.createElement("div"); // creates div
//   div.classList.add("todo"); // adds todo class to created div
//   const makeli = document.createElement("li");
//   makeli.innerText = "Test";
// };

function addTodo(e) {
  e.preventDefault();
  const div = document.createElement("div"); // creates div
  div.classList.add("todo"); // adds todo class to created div
  const makeli = document.createElement("li");
  makeli.innerText = "Test";
  makeli.classList.add("newtodo");
  div.appendChild(makeli); // appends makeli to div
  const buttonFinish = document.createElement("button");
  buttonFinish.innerText = "test";
  buttonFinish.classList.add("buttonDone");
  div.appendChild(buttonFinish);

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "testDelete";
  buttonDelete.classList.add("buttonDelete");
  div.appendChild(buttonDelete);

  todoList.appendChild(div);
}
