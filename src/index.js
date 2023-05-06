import { nanoid } from 'nanoid';
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// /-------------------------------------------------------------------------/

const form = document.querySelector('#task-form');
const ul = document.querySelector('#task-list');

form.addEventListener('submit', onSubmit);
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
creatMarkUP();

function onSubmit(ev) {
  ev.preventDefault();
  const formInput = form.elements.taskName.value.trim();

  if (formInput) {
    tasks.push({ id: nanoid(), text: formInput });
  }
  creatMarkUP();
  saveTasks();
}

function creatMarkUP() {
  ul.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    const button = document.createElement('button');
    button.textContent = 'X';
    button.dataset.index = task.id;
    button.addEventListener('click', deleteTask);
    li.appendChild(button);
    ul.appendChild(li);
  });
}

function deleteTask(ev) {
  const taskIndex = ev.target.dataset.index;
  tasks.splice(taskIndex, 1);
  creatMarkUP();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
