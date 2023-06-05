function renderUpdateList() {
	document.querySelector('#page').innerHTML = `
		<section class='update-list'>
			<form action="" onSubmit="updateList(event)">
				<h2>Update List</h2>
				<fieldset>
					<label for="">List: </label>
					<input type="text" name="name">
				</fieldset>
				<fieldset>
					<label for="">Description: </label>
					<textarea name="description" id="" cols="30" rows="10"></textarea>
				</fieldset>
				<button>Update List</button>
			</form>
		</section>
	`
}

function updateList(event) {
	event.preventDefault()
	const form = event.target;
	const data = Object.fromEntries(new FormData(form))
	console.log(data)
	const listDOM = form.closest('.update-list');
	const listId = Number(listDOM.dataset.id);
	fetch(`/api/lists/update/${listId}`, {
	  method: 'PUT',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(data)
	})
	  .then(res => res.json())
	  .then(res => {

		const index = state.lists.findIndex(t => t.listId === listId);
		console.log('woof')
		console.log(typeof listId)
		state.lists[index] = data;
		renderList();
	  });
  }