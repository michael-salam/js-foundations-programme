const form = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todosContainer = document.getElementById("todos-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createTodo();
});

function createTodo() {
  const newTodoContainer = document.createElement("div");
  const newTodoText = document.createElement("p");
  const markAsCompleteBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  newTodoText.textContent = todoInput.value;
  markAsCompleteBtn.textContent = "Mark as complete";
  markAsCompleteBtn.classList.add("mark-as-complete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  markAsCompleteBtn.addEventListener("click", (event) =>
    markTodoAsComplete(event)
  );
  deleteBtn.addEventListener("click", (event) => deleteTodo(event));

  newTodoContainer.appendChild(newTodoText);
  newTodoContainer.appendChild(markAsCompleteBtn);
  newTodoContainer.appendChild(deleteBtn);
  todosContainer.appendChild(newTodoContainer);

  todoInput.value = "";
}

function markTodoAsComplete(event) {
  const parent = event.target.parentNode;
  parent.classList.toggle("completed");
}

function deleteTodo(event) {
  const parent = event.target.parentNode;
  parent.remove();
}
