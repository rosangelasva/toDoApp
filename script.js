var addTask = document.getElementById('addTask');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

addTask.addEventListener('click', function() {
  if (taskInput.value.trim() !== '') {
    var taskItem = document.createElement('li');
    var taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = taskInput.value.trim();
    taskItem.appendChild(taskText);

    var botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.className = 'editarBtn';
    botaoEditar.addEventListener('click', function() {
      editarTarefa(taskText, taskItem);
    });
    taskItem.appendChild(botaoEditar);

    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'removerBtn';
    botaoRemover.addEventListener('click', function() {
      removerTarefa(taskItem);
    });
    taskItem.appendChild(botaoRemover);

    taskList.appendChild(taskItem);
    taskInput.value = '';
    saveTask(taskText.textContent);
  }
});

function editarTarefa(taskText, taskItem) {
  taskInput.value = taskText.textContent;
  taskList.removeChild(taskItem);
}

function removerTarefa(taskItem) {
  taskList.removeChild(taskItem);
}

function saveTask(taskValue) {
  localStorage.setItem('tarefaInserida', taskValue);
}

window.onload = function() {
  let tarefaArmazenada = localStorage.getItem('tarefaInserida');
  if (tarefaArmazenada) {
    var taskItem = document.createElement('li');
    var taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = tarefaArmazenada;
    taskItem.appendChild(taskText);

    var botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.className = 'editarBtn';
    botaoEditar.addEventListener('click', function() {
      editarTarefa(taskText, taskItem);
    });
    taskItem.appendChild(botaoEditar);

    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'removerBtn';
    botaoRemover.addEventListener('click', function() {
      removerTarefa(taskItem);
    });
    taskItem.appendChild(botaoRemover);

    taskList.appendChild(taskItem);
  }
};
