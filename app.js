const todoinput = document.querySelector(".todo");
const todoButton = document.querySelector(".todobtn");
const todoList = document.querySelector(".list");

// todoButton.addEventListener("click", addTodo); // calls the addTodo function
// todoList.addEventListener("click", deleteTodo);
// const addTodo = (e) => {
//   e.preventDefault();
//   const div = document.createElement("div"); // creates div
//   div.classList.add("todo"); // adds todo class to created div
//   const makeli = document.createElement("li");
//   makeli.innerText = "Test";
// };

const addTodo = (e) => {
  e.preventDefault();
  const div = document.createElement("div"); // creates div
  div.classList.add("todo"); // adds todo class to created div
  const makeli = document.createElement("li");
  makeli.innerText = todoinput.value; // pulls the text from the <input>
  makeli.classList.add("newtodo");
  div.appendChild(makeli); // appends makeli to div
  const buttonFinish = document.createElement("button"); // creates button
  buttonFinish.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'; // adds icon to button
  buttonFinish.classList.add("buttonDone"); // adds a class of buttonDone to the buttom
  div.appendChild(buttonFinish); // appends button to div

  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'; // same as above
  buttonDelete.classList.add("delete-btn");
  div.appendChild(buttonDelete); // ditto buttonFinish
  todoList.appendChild(div);
  todoinput.value = ""; // clear todoinput value
};

const deleteTodo = (e) => {
  e.preventDefault();
  console.log(e.target); //
  const item = e.target; //
  if (item.classList[0] === "delete-btn") {
    // classList[0] = checks first class
    const todoParent = item.parentElement; // todoParent becomes the parent element of what we clicked on
    todoParent.classList.add("delete-anim");
    todoParent.addEventListener("transitionend", (e) => {
      // will excute after transition finishes
      todoParent.remove();
    });
  }
  if (item.classList[0] === "buttonDone") {
    todoParent = item.parentElement;
    todoParent.classList.toggle("complete"); //
  }
};
// TIME: 30:00

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
