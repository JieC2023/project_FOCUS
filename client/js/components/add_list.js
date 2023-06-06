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
					<input type="text"name="description">
				</fieldset>
				<button>Add List</button>
			</form>
		</section>
	`
}

function createList(event) {
    event.preventDefault();
    const form = event.target;

    let data = Object.fromEntries(new FormData(form));

    console.log(data);

    if (state.guestUser === true) {
        state.lists.push(data); // Assuming you want to push the form data to the lists array
        renderSaveList();
    } else {
        data.userId = state.loggedInUser.userId;

        fetch('/api/lists', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(list => {
			console.log(list)
            state.lists.push(list);
            renderAccount();
        });
    }
}