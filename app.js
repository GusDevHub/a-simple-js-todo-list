function readToDos(arr) {
    todoList.innerHTML = ""
    let ul = document.createElement('ul')
    for (let i = 0; i < todoArray.length; i++) {
        let li = document.createElement('li')
        let delBt = document.createElement('input')
        delBt.type = "button"
        delBt.id = "del-todo-button"
        delBt.value = "remove"
        delBt.addEventListener('click', () => {
            todoArray.splice(i, 1)
            todoList.appendChild(readToDos(todoArray))
        })
        li.innerText = todoArray[i]
        li.appendChild(delBt)
        ul.appendChild(li)
    }
    return ul
}

function createTodo(arr, description) {
    arr.push(description)
    return readToDos(arr)
}

function removeTodo(arr, description) {
    arr.pop(description)
    return readToDos(arr)
}

function updateTodos(arr) {
    readToDos(arr)
}

const todoArray = [
    "Wake up",
    "Do the bed",
    "Feed the cats",
    "Make two cups of tea",
    "Water the plants"
]

let container = document.getElementById('container')
let addTodoButton = document.getElementById('add-todo-button')
let delTodoButton = document.getElementById('del-todo-button')
let todoInput = document.getElementById('todo-input')
todoInput.value = ""
let todoList = document.getElementById('todo-list')

todoList.appendChild(readToDos())

addTodoButton.addEventListener('click', () => {
    todoList.appendChild(createTodo(todoArray, todoInput.value))
})
