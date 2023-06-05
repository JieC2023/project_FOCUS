function renderTasks() {
    return state.tasks.map(task => `
    <section class="task" data-id='${task.taskId}'>
      <header>
        <h2>${task.taskName}</h2>
        <span class="material-symbols-outlined delete" onClick="deleteTask(event)">delete</span>
        <span onClick="renderUpdateTask(${task.taskId})">update</span>
      </header>
      <p>${task.description}</p>
      <p>${task.priorityLevel}</p>
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
        state.tasks = state.tasks.filter(t => t.task_Id != taskId)
        renderList()
      })
}
