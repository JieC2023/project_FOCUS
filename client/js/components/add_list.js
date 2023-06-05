function renderAddList() {
	document.querySelector('#page').innerHTML = `
		<section class='create-list'>
			<form action="" onSubmit="createList(event)">
				<h2>Add List</h2>
				<fieldset>
					<label for="">List: </label>
					<input type="text" name="name">
				</fieldset>
				<fieldset>
					<label for="">Description: </label>
					<textarea name="description" id="" cols="30" rows="10"></textarea>
				</fieldset>
				<button>Add List</button>
			</form>
		</section>
	`
}

function createList(event) {
	event.preventDefault()
	const form = event.target

	const data = Object.fromEntries(new FormData(form))

	console.log(data)

    if (state.loggedInUser) {
        data = { userId: state.loggedInUser.userId, ...data }
        fetch('/api/lists', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(list => {
                state.lists.push(list)
                renderUserLists()
            })
    } else {
        state.lists.push(data)
    }
}