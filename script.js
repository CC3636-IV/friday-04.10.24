let userInput = document.querySelector("#user-input");
let todolistelement = document.querySelector("#todo-list");

function handleSubmit(event) {
    event.preventDefault();

    console.log("Creating Todo Object...");
    createTodoObject(userInput);
}

userInput.addEventListener("submit", handleSubmit);

function createTodoObject(form) {
    let todo = form.querySelector("#todo");
    let todoValue = todo.value;
    console.dir(todoValue);
}
