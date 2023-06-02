function renderAddTask() {
	document.querySelector('#page').innerHTML = `
		<section class='create-task'>
			<form action="" onSubmit="createTask(event)">
				<h2>Add Task</h2>
				<fieldset>
					<label for="">Task: </label>
					<input type="text" name="task_name">
				</fieldset>
				<fieldset>
					<label for="">Description: </label>
					<input type="text" name="description">
				</fieldset>
				<fieldset>
					<label for="">Priority: </label>
					<input type="text" name="priority_level">
				</fieldset>
				<button>Add Task</button>
			</form>
		</section>
	`
}

function createTask(event) {
	event.preventDefault()
	const form = event.target

	const data = Object.fromEntries(new FormData(form))

	fetch('/api/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(task => {
			state.tasks.push(task)
			renderList()
		})
}