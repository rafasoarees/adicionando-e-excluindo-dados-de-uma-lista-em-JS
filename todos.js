var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [] ;

function renderTodos(){
    listElement.innerHTML = '';
    //Percorre o vetor e adicionar os valores na nova variavel.
    for(todo of todos) {

        //Cria uma lista
        var todoElement = document.createElement('li');
        //Mostra o conteudo salva na variavel
        var todoText = document.createTextNode(todo);
        //Cria um link
        var linkElement = document.createElement('a');
        // Referencia o link.
        linkElement.setAttribute('href', '#');
        //Mostra qual a posição do vetor
        var pos = todos.indexOf(todo);
        //Deleta o vetor na posição escolhida
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')
        //Cria um nome para Excluir cada elemento de cada posição
        var linkText = document.createTextNode('Excluir');

        //Excluir o conteudo da lista
        linkElement.appendChild(linkText);

        //Mostra todo conteudo da lista
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
// Mostro todo o conteudo da lista
renderTodos();

// Função para adicionar novos elementos na lista
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

// Função para deletar elementos da lista com sua posição atual
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

// Salvando no localStorage do proprio navegador.
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
