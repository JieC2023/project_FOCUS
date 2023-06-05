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
	// const form = event.target

	// const data = Object.fromEntries(new FormData(form))

	// console.log(data)
	// const listDOM = form
}