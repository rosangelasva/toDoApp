var addTask = document.getElementById('addTask');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

addTask.addEventListener('click', function() {
  if (taskInput.value.trim() !== '') {
    var taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value.trim();
    taskList.appendChild(taskItem);
    taskInput.value = '';

    var botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.className = 'editarBtn';
    botaoEditar.addEventListener('click', function() {
      taskInput.value = taskItem.textContent;
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(botaoEditar);

    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'removerBtn';
    botaoRemover.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(botaoRemover);


    saveTask(taskItem.textContent);
  }
});

function saveTask(taskValue) {
  localStorage.setItem('tarefaInserida', taskValue);
}

window.onload = function() {
  let tarefaArmazenada = localStorage.getItem('tarefaInserida');
  if (tarefaArmazenada) {
    var taskItem = document.createElement('li');
    taskItem.textContent = tarefaArmazenada;

    var botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.className = 'editarBtn';
    botaoEditar.addEventListener('click', function() {
      taskInput.value = taskItem.textContent;
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(botaoEditar);

    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'removerBtn';
    botaoRemover.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(botaoRemover);

    taskList.appendChild(taskItem);
  }
};
