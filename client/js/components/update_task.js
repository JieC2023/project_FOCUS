function renderUpdateTask(taskId) {
	document.querySelector('#page').innerHTML = `
	<section class='update-task' data-id='${taskId}'>
    <form action="" onSubmit="updateTask(event)">
        <h2>Update Task</h2>
        <fieldset>
            <label for="">Task: </label>
            <input type="text" name="taskName">
        </fieldset>
        <fieldset>
            <label for="">Description: </label>
            <input type="text" name="description">
        </fieldset>
        <fieldset>
            <label for="">Priority: </label>
            <input type="number" name="priorityLevel">
        </fieldset>
        <button>Update Task</button>
    </form>
</section>
`
}

function updateTask(event) {
	event.preventDefault()
	const form = event.target;
	const data = Object.fromEntries(new FormData(form))
	console.log(data)
	const taskDOM = form.closest('.update-task');
	const taskId = Number(taskDOM.dataset.id);
	fetch(`/api/tasks/update/${taskId}`, {
	  method: 'PUT',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(data)
	})
	  .then(res => res.json())
	  .then(res => {

		const index = state.tasks.findIndex(t => t.taskId === taskId);
		console.log('woof')
		console.log(typeof taskId)
		state.tasks[index] = data;
		renderList();
	  });
  }