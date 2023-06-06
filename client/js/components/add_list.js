function renderAddList() {
    if (state.lists.length > 0 && !state.loggedInUser) {
        document.querySelector('#page').innerHTML = `
        <h2>Uh oh!</h2>
        <p>Looks like you already have a list stored. To save this list and create more, please <span class="link" onClick="renderSignUp()">sign up</span> or <span class="link" onClick="renderLogIn()">log in</span>.</p>
        `
    } else {
        document.querySelector('#page').innerHTML = `
            <section class='create-list'>
                <form action="" onSubmit="createList(event)">
                    <h2>Let's make a new list!</h2>
                    <fieldset>
                        <label for="">List: </label>
                        <input type="text" name="name">
                    </fieldset>
                    <fieldset>
                        <label for="">Description: </label>
                        <input type="text" name="description">
                    </fieldset>
                    <button class="button">Add List</button>
                </form>
            </section>
        `
    }
}

function createList(event) {
    event.preventDefault();
    const form = event.target;

    let data = Object.fromEntries(new FormData(form));

    if (state.guestUser === true) {
        data.userId = 0 // Set list userId as a guest user
        state.lists.push(data)
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
            state.lists.push(list);
            renderAccount();
        });
    }
}