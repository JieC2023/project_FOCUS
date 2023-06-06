function renderAddTask() {
	document.querySelector('#page').innerHTML = `
		<section class='create-task'>
			<form action="" onSubmit="createTask(event)">
				<h2>Let's get a task down.</h2>
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
                ${renderListSelect()}
				<button class="button">Add Task</button>
			</form>
		</section>
	`
}

function renderListSelect() {
    if (state.loggedInUser && state.lists.length > 0) {
        return `
            <select name="listId" id="user-lists">
            ${state.lists.map(list => `
                <option value="${list.listId}">${list.name}</option>
            `)}
            </select>
        `
    }
    return `<input type="hidden" name="listId" value="0">`
}

function createTask(event) {
	event.preventDefault()
	const form = event.target

	const data = Object.fromEntries(new FormData(form))

	console.log(data)

	if (state.guestUser === true || !state.lists[0]) {
        data.listId = 0 // Set list userId as a guest user
        state.tasks.push(data)
        renderAddList();
    } else {
        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(task => {
            state.tasks.push(task);
            renderAccount();
        });
    }
}