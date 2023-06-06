function renderUpdateList(listId) {
	document.querySelector('#page').innerHTML = `
		<section class='update-list' data-id='${listId}'>
			<form action="" onSubmit="updateList(event)">
				<h2>Update List</h2>
				<fieldset>
					<label for="">List: </label>
					<input type="text" name="name">
				</fieldset>
				<fieldset>
					<label for="">Description: </label>
					<input type="text" name="description">
				</fieldset>
				<button>Update List</button>
			</form>
		</section>
	`
}

function updateList(event) {
	event.preventDefault()
	const form = event.target;
    const listDOM = form.closest('.update-list');
	const listId = Number(listDOM.dataset.id);
	const data = { listId: listId, ...Object.fromEntries(new FormData(form))}
	console.log(data)
	fetch(`/api/lists/update/${listId}`, {
	  method: 'PUT',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(data)
	})
      .then(res => res.json())
      .then(res => {

        const index = state.lists.findIndex(l => l.listId === listId);
        console.log(state)
        console.log(index)
        console.log(typeof listId)
        state.lists[index] = data;
        renderUserLists();
      })
}