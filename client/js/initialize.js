const state = {
  guestUser: true,
  tasks: [],
  lists: [],
  activityTypes: ['Busywork', 'Charity', 'Cooking', 'DIY', 'Education', 'Music', 'Recreational', 'Relaxation', 'Social']
}

function renderHome() {
    document.querySelector('.page-CSS').innerHTML = `
    <link rel="stylesheet" href="./css/home.css">
    `
    document.querySelector('#page').innerHTML = `
        <h2 class="link" onClick="renderAddTask()">Get Started!</h2>
        <h3 class="link" onClick="renderTaskGenerator()">
            I'm bored... <br>
            Any suggestions?
        </h3>
        <section class="lists">
            <ul class="home-ul">
                <li class="link" onClick="renderList()">Show Tasks</li>
                <li class="link" onClick="renderUserLists()">Show Lists</li>
            </ul>
            <h3 class="stuff-heading" for="">STUFF!!</h3>
            <ul class="home-ul">
                <li class="link" onClick="renderPixelArt()">Feeling artsy?</li>
                <li class="link" onClick="renderUselessFact()">Useless Facts!</li>
                <li class="link" onClick="renderAdvice()">Ask for advice.</li>
            </ul>
        </section>
    `
}

function checkUser() {
    fetch('/api/sessions')
        .then(res => res.json())
        .then(res => {
            if (res.result === 'successful') {
                delete state.guestUser
                state.loggedInUser = { userId: res.user.userId, name: res.user.name, email: res.user.email }
                fetch(`/api/lists/${res.user.userId}`)
                    .then(res => res.json())
                    .then(userLists => {
                        userLists = [...Array(userLists)]
                        state.lists = [...state.lists, ...userLists[0]]
                        if (state.lists.length > 0) {
                            state.lists.forEach(list => {
                                fetch(`/api/tasks/list/${list.listId}`)
                                    .then(res => res.json())
                                    .then(listTasks => {
                                        listTasks = [...Array(listTasks)]
                                        state.tasks = [...state.tasks, ...listTasks[0]]
                                    })
                            })
                        }
                    })
                document.querySelector('.user-controls ul').innerHTML = `
                    <h3>Welcome back, <span class="link" onClick="renderAccount()">${state.loggedInUser.name}</span>!</h3>
                    <span class="button" onClick="logOut()">Log Out</span>
                `
            } else {
                document.querySelector('.user-controls ul').innerHTML = `
                        <li class="button" onClick="renderSignUp()">Sign Up</li>
                        <li class="button" onClick="renderLogin()">Login</li>
                `
            }
        })
}

checkUser()
