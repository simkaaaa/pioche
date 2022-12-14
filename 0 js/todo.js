const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deleteToDo(event) {
    const liDeleted = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(liDeleted.id));
    liDeleted.remove();
    saveToDos();
};

function paintToDo(newToDo) {
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.border = 0;
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};