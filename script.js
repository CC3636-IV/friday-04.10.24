let userInput = document.querySelector("#user-input");
let todoListElement = document.querySelector("#todo-list");

let todos = [];

function handleSubmit(event) {
  event.preventDefault();

  console.log("Creating Todo Object...");
  let newTodo = createTodoObject(userInput);

  console.log("Append new todo to todo list...");
  todos.push(newTodo);

  console.log("Clearing out the old todos from the document...");
  todoListElement.innerHTML = "";

  console.log("Appending all todos to the Document...");
  todos.forEach((todo, index) => {
    let newTodoCard = createTodoCard(todo);
    todoListElement.append(newTodoCard);
  });
}

userInput.addEventListener("submit", handleSubmit);

function createTodoObject(form) {
  let todo = form.querySelector("#todo");
  let todoValue = todo.value;

  let todoObject = {
    title: todoValue,
  };

  return todoObject;
}

function createTodoCard(todoObject) {
  let todoCard = document.createElement("li");
  let titleElement = document.createElement("h2");

  todoCard.append(titleElement);

  titleElement.textContent = todoObject.title;

  return todoCard;
}
