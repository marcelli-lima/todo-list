const button = document.getElementById('criar-tarefa');

function addTarefa() {
  const valueInput = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const createLis = document.createElement('li');
  const novaTarefa = valueInput.value;
  createLis.innerHTML = novaTarefa;
  list.appendChild(createLis);
  valueInput.value = '';
}

const valueInput = document.getElementById('texto-tarefa');
valueInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTarefa();
  }
});

button.addEventListener('click', addTarefa);

const list = document.getElementById('lista-tarefas');
list.addEventListener('click', (event) => {
  const lis = document.getElementsByTagName('li');
  for (const li of lis) {
    if (li.className === 'selected') {
      li.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
});

list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', () => {
  list.innerHTML = '';
});

const buttonRemoveCompleted = document.getElementById('remover-finalizados');
buttonRemoveCompleted.addEventListener('click', () => {
  const taskCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < taskCompleted.length; i += 1) {
    taskCompleted[i].remove();
  }
});

const btnMoveUp = document.querySelector('#mover-cima');
btnMoveUp.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected && list.length !== 0 && selected.previousElementSibling !== null) {
    document.querySelector('ol').insertBefore(selected, selected.previousElementSibling);
  }
});

const btnMoveDown = document.querySelector('#mover-baixo');
btnMoveDown.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected && list.length !== 0 && selected.nextElementSibling !== null) {
    document.querySelector('ol').insertBefore(selected.nextElementSibling, selected);
  }
});

const buttonRemoveSelected = document.getElementById('remover-selecionado');
buttonRemoveSelected.addEventListener('click', () => {
  const lis = document.getElementsByTagName('li');
  for (const selected of lis) {
    if (selected.className === 'selected') {
      selected.remove();
    }
  }
});
const buttonSaveTask = document.getElementById('salvar-tarefas');
buttonSaveTask.addEventListener('click', () => {
  localStorage.clear();
  const todasTarefas = list.innerHTML;
  localStorage.setItem('listaSalva', todasTarefas);
});

function recuperarListaSalva() {
  list.innerHTML = localStorage.getItem('listaSalva');
}
recuperarListaSalva();
