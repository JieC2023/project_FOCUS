function renderUpdateTask() {


	document.querySelector('#page').innerHTML = `
	<section class='update-task'>
    <form action="" onSubmit="updateTask(event, ${task_Id})">
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

function updateTask(event) {
	const updateBtn = event.target;
	const taskDOM = updateBtn.closest('.task');
	const taskId = taskDOM.dataset.id;
	console.log(taskId)
	const updatedData = {
	  taskName: 'Updated Task Name',
	  description: 'Updated Description',
	  priorityLevel: 'Updated Priority Level'
	};
	fetch(`/api/tasks/update/${taskId}`, {
	  method: 'PUT',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(updatedData)
	})
	  .then(res => res.json())
	  .then(updatedTask => {

		const index = state.tasks.findIndex(t => t.task_id === taskId);
		state.tasks[index] = updatedTask;
		renderList();
	  });
  }