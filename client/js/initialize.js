const state = {
  tasks: []
}

fetch('/api/tasks')
  .then(res => res.json())
  .then(tasks => {
    state.tasks = tasks
    renderList()
  })

fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
    }
  })