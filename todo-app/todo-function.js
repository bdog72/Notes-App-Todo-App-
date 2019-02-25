'use strict';

// Fetch existing todos from localstorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    return todosJSON !== null ? JSON.parse(todosJSON) : [];
  } catch (error) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle the completed value for a todo
const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Render application todos based on filter
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(todo => {
    document.querySelector('#todos').appendChild(generateTodoDom(todo));
  });
};

// Get the DOM elements for an individual todo
const generateTodoDom = todo => {
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup the remove button
  removeButton.textContent = 'x';
  todoEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  return todoEl;
};

// Get DOM elements for list summary
const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
