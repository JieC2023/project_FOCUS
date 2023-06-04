function renderUpdateTask() {
	document.querySelector('#page').innerHTML = `
		<section class='update-task'>
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
					<input type="text" name="priorityLevel">
				</fieldset>
				<button>Update Task</button>
			</form>
		</section>
	`
}

// function updateTask(event) {
// 	const updateBtn =event.target
// 	const 
// }