


var TodoApp = (function() {

    //private variables
    var _todos = {};

    function updateView() {

        var todoList = document.getElementById('todoList');
        var completedTodoList = document.getElementById('completedTodoList');

        //TODO: What's wrong with this code?
        for(var key in _todos) {

            var div = document.createElement('div');

            div.innerHTML = _todos[key].text;
            div.id = _todos[key].id;
            div.onclick = toggleComplete;

            if(_todos[key].complete)
                completedTodoList.appendChild(div);
            else
                todoList.appendChild(div);
        }
    }

    function addTodo() {
        var newTodoText = document.getElementById('newTodoText').value;
        if(!_todos[newTodoText]) {
            var newTodo = {
                text: newTodoText,
                complete: false
            };

            _todos[newTodoText] = newTodo;

            updateView();
        }
    }

    function removeTodo(todoText) {
        delete _todos[todoText];
        updateView();
    }

    //TODO: Homework... Implement the ability to toggle todo completeness
    function toggleComplete(e) {
        updateView();
    }

    (function bootstrap() {
        var addTodoButton = document.getElementById('addTodoButton');
        addTodoButton.addEventListener('click', addTodo, false);

        document.getElementById('todoList').value = _todos;
    })();
})();

