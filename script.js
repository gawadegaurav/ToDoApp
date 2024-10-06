const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

let todos = [
  {
    id: 1,
    title: "todo1",
    completed: false,
  },
  {
    id: 2,
    title: "todo2",
    completed: false,
  },
];

let todoFromLocal = localStorage.getItem("todos");


function renderTodos() {
  listcontainer.innerHTML = "";
  for (let j = 0; j < todos.length; j++) {
    let todo = todos[j];
    let li = document.createElement("li");
    let div = document.createElement("div");
    let innerDiv = document.createElement("div");
    let p = document.createElement("p");
    let i = document.createElement("i");
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    if (todo.completed) {
      inp.setAttribute("checked", todo.completed);
    } else {
      inp.removeAttribute("checked");
    }
    inp.addEventListener("change", () => {
      changeStatus(todo.id);
    });
    i.addEventListener("click", () => {
      deleteTodo(todo.id);
    });
    i.classList.add("fa-solid");
    i.classList.add("fa-trash");
    p.innerHTML = todo.title;
    listcontainer.appendChild(li);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(innerDiv);
    innerDiv.appendChild(i);
    innerDiv.appendChild(inp);
  }
}

function addTask() {
  if (inputbox.value === "") {
    alert("Add a task");
  } else {
    let newtodo = {
      id: todos.length + 1,
      title: inputbox.value,
      completed: false,

    };
    todos.push(newtodo);
    inputbox.value = "";
    renderTodos();
  }
}

renderTodos();

function changeStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].completed = !todos[i].completed;
    }
  }
  renderTodos();
  console.log("Todo updated successfully", id);
  renderTodos();
}

function deleteTodo(id) {
  let newTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      newTodos.push(todos[i]);
    }
  }
  todos = newTodos;
  renderTodos();
  console.log("Todo deleted successfully");
}
