var listElement = document.querySelector('#toDo ul');
var inputElement = document.querySelector('#toDo input');
var buttonElement = document.querySelector('#toDo button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteItem('+ posicao + ')');

        var linkTxt = document.createTextNode('Excluir');

        linkElement.appendChild(linkTxt);

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteItem(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}