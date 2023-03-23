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
  makeli.innerText = todoinput.value; // pulls the text from the <input>
  makeli.classList.add("newtodo");
  div.appendChild(makeli); // appends makeli to div
  const buttonFinish = document.createElement("button"); // creates button
  buttonFinish.innerText = "test"; // adds text to button
  buttonFinish.classList.add("buttonDone"); // adds a class of buttonDone to the buttom
  div.appendChild(buttonFinish); // appends button to div

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "testDelete";
  buttonDelete.classList.add("buttonDelete");
  div.appendChild(buttonDelete); // ditto buttonFinish
  todoList.appendChild(div);
  todoinput.value = ""; // clear todoinput value
}

// TIME: 30:00
