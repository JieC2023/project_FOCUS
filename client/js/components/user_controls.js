function renderLogin() {
    document.querySelector('#page').innerHTML = `
      <section class='log-in'>
        <form action="" onSubmit="logIn(event)">
          <h2>Login:</h2>
          <fieldset>
            <label for="">Email: </label>
            <input type="text" name="email">
          </fieldset>
          <fieldset>
            <label for="">Password: </label>
            <input type="password" name="password">
          </fieldset>
          <button>Log in</button>
        </form>
      </section>
    `
}
  
function logIn(event) {
    event.preventDefault()
    const form = event.target
  
    // converts form data into an object
    const data = Object.fromEntries(new FormData(form))
  
    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          renderLogin()
          renderError(res.error)
        } else {
          state.loggedInUser = { userId: res.user.userId, name: res.user.name, email: res.user.email }
          delete state.guestUser
          state.lists.forEach(list => {
            list.userId = res.user.userId
            fetch('/api/lists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(list => {
                state.lists.push(list);
                state.tasks.forEach(task => {
                    task.listId = list.listId
                    fetch('/api/tasks', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(task)
                    })
                    .then(res => res.json())
                    .then(task => {
                        state.tasks.push(task);
                        renderAccount();
                    });
                })
                renderAccount();
            });
          })
          checkUser()
          renderAccount()
        }
      })
}
  
function logOut() {
    fetch('/api/sessions', {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => {
        if  (res.error) {
            renderError(res.error)
        } else {
            delete state.loggedInUser
            state.guestUser = true
            checkUser()
            renderHome()
        }
    })
  }
  
  function renderError(errorMessage) {
    document.querySelector('#page').innerHTML =
      `<h2 style='color: red;'>${errorMessage}</h2>` +
      document.querySelector('#page').innerHTML
  }
  