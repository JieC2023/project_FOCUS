function renderList() {
  document.querySelector('#page').innerHTML = `
    <section class="task-list">
      ${renderTasks()}
    </section>
  `
}
function renderTasks() {
  return state.tasks.map(task => `
  <section class="task" data-id='${task.task_id}'>
    <header>
      <h2>${task.task_name}</h2>
      <span class="material-symbols-outlined delete" onClick="deleteTask(event)">delete</span>
      <span onClick="renderUpdateTask(${task.task_id})">update</span>
    </header>
    <p>${task.description}</p>
    <p>${task.priority_level}</p>
  </section>
`).join('')
}

function deleteTask(event) {
  const deleteBtn = event.target
  const taskDOM = deleteBtn.closest('.task')
  const taskId = taskDOM.dataset.id
  console.log(taskId)
  fetch(`/api/tasks/delete/${taskId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.tasks = state.tasks.filter(t => t.task_id != taskId)
      renderList()
    })
}