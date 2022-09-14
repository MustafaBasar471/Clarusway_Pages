const input = document.querySelector("input");
const buttons = document.querySelector("button");
const delete_button = document.querySelectorAll(".body")[0];
const ul = document.querySelector("ul");
const body = document.querySelector("body");
console.log(delete_button);

const deleteTodo = (e) => {
  if (e.target.className === "fa-sharp fa-solid fa-trash p-2") {
    e.target.parentElement.parentElement.remove();
    deleteTodoStorage(e.target.parentElement.parentElement.textContent);
    console.log(e.target.parentElement.parentElement.textContent);
  }
};

const addTodo = (e) => {
  const newTodo = input.value.trim();
  if (newTodo === "") {
    console.log("Başarısız");
  } else if (e.key === "Enter" || e.key === undefined) {
    console.log("Todo Ekleme Başarıyla Gerçekleşti");
    addTodoUI(newTodo);
    setTodoToLocalStorage(newTodo);
  }
};

const addTodoUI = (newTodo) => {
  const listItem = document.createElement("li");
  const pa = document.createElement("a");
  pa.className = "text-center hover:scale-125 cursor-pointer";
  pa.href = "#";
  pa.innerHTML = '<i class="fa-sharp fa-solid fa-trash p-2"></i>';
  listItem.className =
    "border flex capitalize justify-between items-center min-h-[3rem] mt-3 sm:mt-0 h-auto w-full px-[1rem] rounded-lg shadow-md";

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(pa);

  ul.appendChild(listItem);
  input.value = "";
};

const setTodoToLocalStorage = (newTodo) => {
  let todo = getTodos();

  todo.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todo));
};

const getTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
};

const loadAllTodos = () => {
  let todos = getTodos();

  todos.forEach((todo) => {
    addTodoUI(todo);
  });
};

const deleteTodoStorage = (deleteTodo) => {
  let todos = getTodos();

  todos.forEach((todo, idx) => {
    if (todo === deleteTodo) {
      todos.splice(idx, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", loadAllTodos);
body.addEventListener("keyup", addTodo);
delete_button.addEventListener("click", deleteTodo);
buttons.addEventListener("click", addTodo);
