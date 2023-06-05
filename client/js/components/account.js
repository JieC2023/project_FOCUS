function renderAccount() {
    document.querySelector('#page').innerHTML = `
        <h2>Hey, ${state.loggedInUser.name}!</h2>
        <h3 class="link" onClick="renderUserLists()">See my lists</h3>
        <h3 class="link" onClick="renderAddTask()">Start new list</h3>
    `
}